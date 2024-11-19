import * as path from 'path';
import * as fs from 'fs/promises';
import { jack } from 'jackspeak';
import { Octokit } from 'octokit';
import { createActionAuth } from "@octokit/auth-action";

const { values } = jack()
    .opt({
        token: {
            description: 'Github authentication token'
        },
        path: {
            description: 'Path to save the release data',
            default: '_data/downloads/engine.json'
        }
    })
    .parse(process.argv);

let options;
if (values.token) {
    console.log('::debug::Authenticating via token');
    options = { auth: values.token };
} else {
    console.log('::debug::Authenticating via create action auth');
    options = { authStrategy: createActionAuth };
}

const octokit = new Octokit(options);

console.log('Requesting GET /repos/pico-sdk-js/pico-sdk-js-engine/releases');

const response = await octokit.request({
    method: 'GET',
    url: '/repos/pico-sdk-js/pico-sdk-js-engine/releases'
});

if (response.status !== 200) {
    console.log(`::error::Request failed with status code ${response.status}`);
    process.exit(-1);
}

console.log('::group::Release reponse')
console.log(response.data);
console.log('::endgroup::')

let latestRelease = null;
let latestReleaseDate = null;

console.log('::debug::Searching releases');
for (let i=0; i<response.data.length; i++) {
    const release = response.data[i];

    if (release.draft) {
        console.log(`::debug::Draft release '${release.name}' found & ignored`);
        continue;
    };

    const releaseDate = Date.parse(release.created_at);

    if (latestReleaseDate === null || releaseDate > latestReleaseDate) {
        latestRelease = release;
        latestReleaseDate = releaseDate;
    }
}

if (latestRelease === null) {
    console.log('::error::No releases found in response');
    process.exit(-1);
}

console.log(`Latest release '${latestRelease.name}' found.`);
const releaseJson = JSON.stringify(latestRelease, null, 2);

console.log('::group::Release Information')
console.log(releaseJson);
console.log('::endgroup::')

console.log(`Saving to '${values.path}'.`);

let fullPath = path.resolve(values.path);
console.log(`::debug::Full path = ${fullPath}`);

await fs.writeFile(fullPath, releaseJson);

console.log('Complete!');