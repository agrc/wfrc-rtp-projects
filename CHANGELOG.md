# Changelog

## [5.3.14](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.13...v5.3.14) (2026-01-06)


### Bug Fixes

* remove deprecated sass import directive ([a16136b](https://github.com/agrc/wfrc-rtp-projects/commit/a16136bf3d93635d96fb3bb4719eb2759ab1ae7d))
* vendor layer selector ([7f3b06f](https://github.com/agrc/wfrc-rtp-projects/commit/7f3b06f7b15ebe692c76325bfb255226aed49915))

## [5.3.13](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.12...v5.3.13) (2025-11-05)


### Dependencies

* bump the major-dependencies group across 1 directory with 5 updates ([fc530da](https://github.com/agrc/wfrc-rtp-projects/commit/fc530da32ebb5961bf15a73f4c5c645f9b49ab94))
* bump the safe-dependencies group across 1 directory with 27 updates ([6f0ae9f](https://github.com/agrc/wfrc-rtp-projects/commit/6f0ae9f19d8317a82bb9a62353bd32fba30feea4))
* **dev:** bump vite in the npm_and_yarn group across 1 directory ([0961c6c](https://github.com/agrc/wfrc-rtp-projects/commit/0961c6cbcc6a080c3f9e2cd0a14d761ba78840f0))

## [5.3.12](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.11...v5.3.12) (2025-08-01)


### Dependencies

* bump the safe-dependencies group with 2 updates ([a0ddfd7](https://github.com/agrc/wfrc-rtp-projects/commit/a0ddfd7ad6b2e05492dcec50476ede24b12cb49d))

## [5.3.11](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.10...v5.3.11) (2025-07-31)


### Dependencies

* bump esbuild from 0.24.2 to 0.25.5 in the npm_and_yarn group ([6841421](https://github.com/agrc/wfrc-rtp-projects/commit/6841421122267ccef784aaf16e4208c33d882707))
* bump the safe-dependencies group across 1 directory with 23 updates ([19a739c](https://github.com/agrc/wfrc-rtp-projects/commit/19a739cc07daf4d961741e1ad383dce514e4b903))
* bump the safe-dependencies group with 2 updates ([7c61fb9](https://github.com/agrc/wfrc-rtp-projects/commit/7c61fb97a6e752d234088b4efb9d015a890a6faf))

## [5.3.10](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.9...v5.3.10) (2025-05-21)


### Dependencies

* bump npm dependencies 🌲 ([4b5d65d](https://github.com/agrc/wfrc-rtp-projects/commit/4b5d65d62fc7e809a20688e3e1944b69162ed611))
* bump the npm_and_yarn group across 1 directory with 2 updates ([32e2d92](https://github.com/agrc/wfrc-rtp-projects/commit/32e2d926697bf9e2306e7006b79c474069bd8776))
* **dev:** bump vite from 6.0.7 to 6.0.9 in the npm_and_yarn group ([829b75b](https://github.com/agrc/wfrc-rtp-projects/commit/829b75be6e7daeece8ace7160d676d2c6fb46dfe))

## [5.3.9](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.8...v5.3.9) (2025-01-09)


### Dependencies

* FY25 Q3 dependency bumps 🌲 ([85fd941](https://github.com/agrc/wfrc-rtp-projects/commit/85fd94141104cdcabdd36a839ba70eb7aab27356))

## [5.3.9-0](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.8...v5.3.9-0) (2025-01-08)


### Dependencies

* FY25 Q3 dependency bumps 🌲 ([2d0e364](https://github.com/agrc/wfrc-rtp-projects/commit/2d0e364c49c61fec1ff85ea464df296a18dbda83))

## [5.3.8](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.7...v5.3.8) (2024-10-03)


### Bug Fixes

* give deploy permissions to write to the newly created tag ([a9509e9](https://github.com/agrc/wfrc-rtp-projects/commit/a9509e9596f759081ae8c2ca521d9dbc83192565))

## [5.3.7](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.6...v5.3.7) (2024-10-03)


### Dependencies

* bump the npm_and_yarn group with 2 updates ([4bef066](https://github.com/agrc/wfrc-rtp-projects/commit/4bef0660d1e51a825c92786a5954cd79e64ddb29))
* FY25Q2 dependency updates 🌲 ([ca4eeb2](https://github.com/agrc/wfrc-rtp-projects/commit/ca4eeb2adba3741f9c17c4265e1fc1d8835846d1))

## [5.3.6](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.6...v5.3.6) (2024-08-15)


### ⚠ BREAKING CHANGES

* added `rtpInfoLink` required config prop
* Added `aboutTitle` required config
* Added the following config props under `layerSelector`:
    - `BWName`
    - `BWOpacity`
* `projectInformation` config changes: `commentsEnabled` and `commentsEnabledUntil` have been replaced with `showComments`, `newCommentsEnabled`, and `newCommentsEnabledUtil`. See the updated docs for details.
* A new filter config property, `limitFacilityType`, has been added. Also, the `useAnd` and `offByDefault` options have been removed since they are no longer needed.
* `defaultExtent` needs to be added to your config.
* The `projectInformation.newCommentsOpenUtil` config value has been renamed to `commentsEnabledUntil`.
* The `infoText` and `projectTypes` configs have been nested under `filter`.

### Features

* add "Limit to [no] ROW needed" filter control ([c6d2eb1](https://github.com/agrc/wfrc-rtp-projects/commit/c6d2eb1daedf10f6ae8ca7d547fe49b381610a83)), closes [#152](https://github.com/agrc/wfrc-rtp-projects/issues/152)
* add (un)select all header links ([b82af26](https://github.com/agrc/wfrc-rtp-projects/commit/b82af26b319c96488c77326260a8693f6c23014a)), closes [#26](https://github.com/agrc/wfrc-rtp-projects/issues/26)
* add `disableAdvanced` filter config ([e40a28f](https://github.com/agrc/wfrc-rtp-projects/commit/e40a28f649bba4a74896057e906019f56ba1a0bb))
* add about sidebar collapsible panel ([57cb3fa](https://github.com/agrc/wfrc-rtp-projects/commit/57cb3fa9b94c468621abd2db5b9709e2b9597aec)), closes [#151](https://github.com/agrc/wfrc-rtp-projects/issues/151)
* add config docs ([ff39312](https://github.com/agrc/wfrc-rtp-projects/commit/ff3931285a2ac8be9c71169dd0dde7e76be20a10))
* add configurable "RTP Info" link to header ([670b98b](https://github.com/agrc/wfrc-rtp-projects/commit/670b98bd6a293e55dc0944408ac95858bae4c316)), closes [#150](https://github.com/agrc/wfrc-rtp-projects/issues/150)
* add defaultExtent config value ([dc76865](https://github.com/agrc/wfrc-rtp-projects/commit/dc768652fafe1a2c720938a4694f98b568285ca3))
* add error boundary to filter ([e25addd](https://github.com/agrc/wfrc-rtp-projects/commit/e25addd4935313e1b6bf609b9612423c84782c57))
* add filter state as url query parameter ([b4d68d9](https://github.com/agrc/wfrc-rtp-projects/commit/b4d68d90986bec0a53edf05ecce984ac6c9b0fba)), closes [#13](https://github.com/agrc/wfrc-rtp-projects/issues/13)
* add final configurable options ([a74a3ef](https://github.com/agrc/wfrc-rtp-projects/commit/a74a3ef6fa7bc18b08e1b6da92f772f851295fcf)), closes [#9](https://github.com/agrc/wfrc-rtp-projects/issues/9)
* add firebase deploy action for dev ([6a32dc9](https://github.com/agrc/wfrc-rtp-projects/commit/6a32dc9cd072c278962f087da7def846b833d9e3))
* add google analytics ([27db32c](https://github.com/agrc/wfrc-rtp-projects/commit/27db32c7f18fcbcf98bf59d64c457af0575c68fe))
* add home button ([d73b240](https://github.com/agrc/wfrc-rtp-projects/commit/d73b2402a20d158af0547a5e0c86b235b02bcddd))
* add link to wfrc favicon ([8b4e051](https://github.com/agrc/wfrc-rtp-projects/commit/8b4e051da7f06ffb0950ff68b045c72733dde9d3)), closes [#29](https://github.com/agrc/wfrc-rtp-projects/issues/29)
* add map widget resizer handle and other layout improvements ([b5d82e6](https://github.com/agrc/wfrc-rtp-projects/commit/b5d82e62ed38c4a2d7b959b42ac95bd308c36c54)), closes [#44](https://github.com/agrc/wfrc-rtp-projects/issues/44)
* add modes config to limit controls ([044fc88](https://github.com/agrc/wfrc-rtp-projects/commit/044fc883f88aba95733d75850f2d04262d8cd1f5)), closes [#168](https://github.com/agrc/wfrc-rtp-projects/issues/168)
* add optional help popup to advanced filter checkboxes ([d221c10](https://github.com/agrc/wfrc-rtp-projects/commit/d221c10ca9237142e87492797e95d4973490831f))
* add project-level error boundary ([234c43c](https://github.com/agrc/wfrc-rtp-projects/commit/234c43cf8fff7e420dfb184de0dd99cdea5589f3)), closes [#47](https://github.com/agrc/wfrc-rtp-projects/issues/47)
* add selected project as a url parameter ([f1e200e](https://github.com/agrc/wfrc-rtp-projects/commit/f1e200e7a78df6f82df27d1f21ec948c98581c23)), closes [#13](https://github.com/agrc/wfrc-rtp-projects/issues/13)
* add sherlock ([51da6e6](https://github.com/agrc/wfrc-rtp-projects/commit/51da6e67ea4433cfe58b79f077cb8d5f09101a86))
* add support for black and white imagery base map ([0543008](https://github.com/agrc/wfrc-rtp-projects/commit/05430089a2da24fab35c9b369e98e0fe406a4baf)), closes [#110](https://github.com/agrc/wfrc-rtp-projects/issues/110)
* add udot/local toggle to facility type limit checkboxes ([c08be8f](https://github.com/agrc/wfrc-rtp-projects/commit/c08be8f69998951d3f7eebd5262b3b0d7c37694e)), closes [#70](https://github.com/agrc/wfrc-rtp-projects/issues/70)
* add url parameters for preserving map extent ([640a4b4](https://github.com/agrc/wfrc-rtp-projects/commit/640a4b44e25f097b07097ab99d40de824d8ac3e4)), closes [#13](https://github.com/agrc/wfrc-rtp-projects/issues/13)
* add validation message to cost filter ([d37686a](https://github.com/agrc/wfrc-rtp-projects/commit/d37686afb16559a796b3007951fd3ffb3edc974e)), closes [#48](https://github.com/agrc/wfrc-rtp-projects/issues/48)
* add vision refresh basemap to layer selector ([aa55df4](https://github.com/agrc/wfrc-rtp-projects/commit/aa55df40b9ef217f0d2790724f8d4e35e5ca7b4d))
* added info popup to use phasing ([98d87ad](https://github.com/agrc/wfrc-rtp-projects/commit/98d87adf40fddae3443344cba66bee620f796b1a))
* auto-cancel builds ([6085cf3](https://github.com/agrc/wfrc-rtp-projects/commit/6085cf38cb6c66278666c67c10795133e632f370))
* auto-open project info on map feature click ([8fcf25a](https://github.com/agrc/wfrc-rtp-projects/commit/8fcf25a73ae389b7f34660e728ad3d2007fcf67f))
* begin to flesh out simple filter layout and framework ([1b1bd0f](https://github.com/agrc/wfrc-rtp-projects/commit/1b1bd0f5c5a47d3524fa9f315e28010c7de29b8b))
* cut prereleases in dev ([c1824d3](https://github.com/agrc/wfrc-rtp-projects/commit/c1824d34baaa74b6899421dc370383a710fbcf78))
* flesh out basic layout ([5d9233f](https://github.com/agrc/wfrc-rtp-projects/commit/5d9233fcdd30806835e55cd0c59d09616a3d6ca1))
* implement "Limit to Needs Phase..." checkbox ([dfdda0b](https://github.com/agrc/wfrc-rtp-projects/commit/dfdda0b38cb34ddac3394348f43d62b88ca80fc3)), closes [#69](https://github.com/agrc/wfrc-rtp-projects/issues/69)
* implement commentsEnabledUntil config ([048a663](https://github.com/agrc/wfrc-rtp-projects/commit/048a663f89c35d4955d362b705d57f94d84782e0)), closes [#66](https://github.com/agrc/wfrc-rtp-projects/issues/66)
* implement cost filters ([e123e04](https://github.com/agrc/wfrc-rtp-projects/commit/e123e0460387db045d808baf219193c500962593))
* implement info popup ([e9ac26a](https://github.com/agrc/wfrc-rtp-projects/commit/e9ac26ae3aa2fd80e6362d431d6a871d85b202da))
* implement layer selector ([fce296d](https://github.com/agrc/wfrc-rtp-projects/commit/fce296dbd43187f61edaafacaa37feca3ba4a01d)), closes [#63](https://github.com/agrc/wfrc-rtp-projects/issues/63) [#64](https://github.com/agrc/wfrc-rtp-projects/issues/64)
* implement phase year filters in advanced ([b140956](https://github.com/agrc/wfrc-rtp-projects/commit/b14095633cf2a6916758c36ccfa03f30da1cd660))
* implement project type header in phase tab ([9d51933](https://github.com/agrc/wfrc-rtp-projects/commit/9d51933a2ab387f55c4457f7ae994b4f4852fc60))
* implement reset filter button ([e52b0c3](https://github.com/agrc/wfrc-rtp-projects/commit/e52b0c302361b5bdd12d7339286e6dfc1a81b4c8)), closes [#12](https://github.com/agrc/wfrc-rtp-projects/issues/12)
* implement splash screen ([de576fa](https://github.com/agrc/wfrc-rtp-projects/commit/de576fa460dd302346479cbbb2e11842ffeef0bc)), closes [#65](https://github.com/agrc/wfrc-rtp-projects/issues/65)
* implement use phasing radio buttons ([abd980f](https://github.com/agrc/wfrc-rtp-projects/commit/abd980fe6e7b0aae4542b58ae8fe5ef186cf07b0))
* initial filter by project type implementation ([f5007cd](https://github.com/agrc/wfrc-rtp-projects/commit/f5007cdf7eb9fd59d9afc88e73424477f002a004))
* make application title configurable ([3160c6b](https://github.com/agrc/wfrc-rtp-projects/commit/3160c6b8ce218e87d40b72afeb04ce0eff4ef1c2))
* open advanced filter on load if url params have changed filter params ([62f98b1](https://github.com/agrc/wfrc-rtp-projects/commit/62f98b17e8509407dbd441e79d7197d484943660)), closes [#89](https://github.com/agrc/wfrc-rtp-projects/issues/89)
* port comments widget from old wab app ([e02835d](https://github.com/agrc/wfrc-rtp-projects/commit/e02835d6c8f3a23f2f8de5e93de7c0d4053d1e31))
* port Project Information widget from wasatch choice map ([66b704c](https://github.com/agrc/wfrc-rtp-projects/commit/66b704cd3f34efde0ef73c62d6d5d2a0b9789210)), closes [#19](https://github.com/agrc/wfrc-rtp-projects/issues/19)
* pretty print sql in console logs ([1fd61a5](https://github.com/agrc/wfrc-rtp-projects/commit/1fd61a5d8b0d3f56b90fb2e64247d6d2abeb718b)), closes [#31](https://github.com/agrc/wfrc-rtp-projects/issues/31)
* show symbols from feature layers ([45980a7](https://github.com/agrc/wfrc-rtp-projects/commit/45980a7ca7b69e3a64afdb2a69d11e89f9385d41))
* sync advanced toggle state between tabs ([a567678](https://github.com/agrc/wfrc-rtp-projects/commit/a567678bd65a962d6b4dcf88ca397279c098f5ee))
* sync project types between mode/phase tabs ([01fe1f3](https://github.com/agrc/wfrc-rtp-projects/commit/01fe1f3ca21f46467a65e62f06ce7cb5ce7d91f6))
* **tooling:** add eslint npm command ([4f9279e](https://github.com/agrc/wfrc-rtp-projects/commit/4f9279edd131ba8b7fbc94e08b4f290c77ec4e97)), closes [#2](https://github.com/agrc/wfrc-rtp-projects/issues/2)
* **tooling:** add react eslint configs ([2d2d9c6](https://github.com/agrc/wfrc-rtp-projects/commit/2d2d9c6ad5dac522f29b7c4f48683b3b852c561b))
* **tooling:** bootstrap and sass ([f2ddeaf](https://github.com/agrc/wfrc-rtp-projects/commit/f2ddeafb770ba76beb0cb10f818d0e3600254a35))
* **tooling:** implement bootstrap ([061a163](https://github.com/agrc/wfrc-rtp-projects/commit/061a163bc29fe17e4f9ee0eeeffff74ca7ceb297))
* **tooling:** implement github action for releases ([4929703](https://github.com/agrc/wfrc-rtp-projects/commit/4929703019c5d27913eebdefc7df62c723ca297f))
* **tooling:** implement prettier ([4391097](https://github.com/agrc/wfrc-rtp-projects/commit/4391097805488e88046568638223925399d553b0)), closes [#2](https://github.com/agrc/wfrc-rtp-projects/issues/2)
* **tooling:** implement standard version release ([229ef1f](https://github.com/agrc/wfrc-rtp-projects/commit/229ef1f8c96c96f2ceb6f20ea6c8be1ccfd0fb29)), closes [#1](https://github.com/agrc/wfrc-rtp-projects/issues/1)
* use separate configs for viewing existing and submitting new comments ([7e7b7ce](https://github.com/agrc/wfrc-rtp-projects/commit/7e7b7ce1fc2faa5325cbd4dd28a770fbde686a83)), closes [#124](https://github.com/agrc/wfrc-rtp-projects/issues/124)
* wire up simple filter checkboxes ([5e351e2](https://github.com/agrc/wfrc-rtp-projects/commit/5e351e26e34c106390b4d482655cc48eacb4588b)), closes [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)


### Bug Fixes

* add config to support non-root level deployment ([9765f7b](https://github.com/agrc/wfrc-rtp-projects/commit/9765f7b4f25302a023ceb42099343d48b759d2b3))
* add mission output ([ce1aa4e](https://github.com/agrc/wfrc-rtp-projects/commit/ce1aa4e7cf0f2bbce82003f5b79c24041f5b88b1))
* add spinners back to bootstrap ([09d1346](https://github.com/agrc/wfrc-rtp-projects/commit/09d134684c4ea03a55bd67cce03a3af98b3ee0bd))
* another try at fixing the sherlock project search crash ([bfa8a7b](https://github.com/agrc/wfrc-rtp-projects/commit/bfa8a7b26590c4f5c7ad86a44ad9d1aae45dea31)), closes [#221](https://github.com/agrc/wfrc-rtp-projects/issues/221)
* app version log ([f52b925](https://github.com/agrc/wfrc-rtp-projects/commit/f52b925ff181bf657a12a00db075821306edbdfa))
* balance geometry type labels with others ([3c9c8d4](https://github.com/agrc/wfrc-rtp-projects/commit/3c9c8d42e36bfc8b058008b026cdb42dc7a6d13e))
* base map selector - Imagery -&gt; Hybrid ([150cc32](https://github.com/agrc/wfrc-rtp-projects/commit/150cc3211b5a525eea5c3146c83f3d0116123b89))
* **build:** jest tests on ci ([f99196d](https://github.com/agrc/wfrc-rtp-projects/commit/f99196da2fea36725c9ffc14789618b1adccf195))
* **build:** linting ([7b2e7a2](https://github.com/agrc/wfrc-rtp-projects/commit/7b2e7a2197371747bab94b4cc2d287d51c8b8650))
* **build:** remove autoprefixer warning that is failing build in ci ([355e082](https://github.com/agrc/wfrc-rtp-projects/commit/355e0827ac58647b500c6fdb6ef502232bad2565))
* bump deps 🌲 ([c389c14](https://github.com/agrc/wfrc-rtp-projects/commit/c389c144d33be21bf618b8b8c98212963484b691))
* December dependency bumps 🌲 ([f0f93f5](https://github.com/agrc/wfrc-rtp-projects/commit/f0f93f5cc9eb2125874cd90520eb14d50023b2ea))
* disable new comments ([50151d6](https://github.com/agrc/wfrc-rtp-projects/commit/50151d69339a491ec405fb03feb64522a3df290e))
* enable arcade expressions in project information component ([baa7ccb](https://github.com/agrc/wfrc-rtp-projects/commit/baa7ccbe39cba95607f8d81906ed20e89a5d8b4b))
* env var substitution ([331ad33](https://github.com/agrc/wfrc-rtp-projects/commit/331ad338b944f8d36c0af084c133574cee7d26c1))
* financially constrained -&gt; fiscally constrained ([75cd5bb](https://github.com/agrc/wfrc-rtp-projects/commit/75cd5bb50bb27ebfc665694258548e3355946e21))
* fix active/focus outline overlap ([42eccc9](https://github.com/agrc/wfrc-rtp-projects/commit/42eccc9167c74c0f6edfdab4756380793b4b7a9f))
* fix cost validation error message ([0a583d4](https://github.com/agrc/wfrc-rtp-projects/commit/0a583d4ae369b571c92f647d95f8046fb35da606))
* fix filter toggle ([df4c43c](https://github.com/agrc/wfrc-rtp-projects/commit/df4c43c73d6a96d43b9ae6ae01a5a7a40f5c08bc))
* fix issues with limit to udot checkboxes ([61b8af8](https://github.com/agrc/wfrc-rtp-projects/commit/61b8af8f901ade74cc6f799ac161dbd9f3ac13b4)), closes [#49](https://github.com/agrc/wfrc-rtp-projects/issues/49)
* fix react router bug causing the app to be blank when hosted in a subdirectory ([7a41dc5](https://github.com/agrc/wfrc-rtp-projects/commit/7a41dc57e1ea4d2e10c1c91045e0fd973fdfb232))
* fix rebuild-docs action ([8ed87da](https://github.com/agrc/wfrc-rtp-projects/commit/8ed87da54134b3394b7c090f7fc0c64331872139))
* fix release output name ([1d14c95](https://github.com/agrc/wfrc-rtp-projects/commit/1d14c9500a71c1dcacc0adf893cd665089669073))
* fix reset button regression ([b881b7c](https://github.com/agrc/wfrc-rtp-projects/commit/b881b7c4b4a8873ebd96d7e2fc69d346a9fed9e8))
* force a deploy ([1154767](https://github.com/agrc/wfrc-rtp-projects/commit/11547678b3c7e408ce0ed1b6f3d4d2cf0e7971e4))
* formatting ([5a308b2](https://github.com/agrc/wfrc-rtp-projects/commit/5a308b292602500e2a065c177f326fb334823536))
* ftp -&gt; rtp typo ([2f54527](https://github.com/agrc/wfrc-rtp-projects/commit/2f545271d757eb13e46e4888ccd7a36b3c193eec))
* give the labels a little more breathing room ([164c1ed](https://github.com/agrc/wfrc-rtp-projects/commit/164c1ed853e2bad0fa8f46d3f408f062b2f8ff32))
* go back to no top-level async/await ([9f0c864](https://github.com/agrc/wfrc-rtp-projects/commit/9f0c8644769ae3d03f5d7cf95b9d423a310ca4bd))
* handle vertical scrolling issue ([0a8fb07](https://github.com/agrc/wfrc-rtp-projects/commit/0a8fb07789cb76634cb8acd7f00892b55d1a2131)), closes [#28](https://github.com/agrc/wfrc-rtp-projects/issues/28)
* hide advanced filter on load ([881d6f1](https://github.com/agrc/wfrc-rtp-projects/commit/881d6f1c727feaef667560fe470198cce61c33af))
* increase symbol size ([9d5caf7](https://github.com/agrc/wfrc-rtp-projects/commit/9d5caf782a3baf090e2ad4e9c38cd1550f127fba))
* January dependency bumps 🌲 ([9ae3cfe](https://github.com/agrc/wfrc-rtp-projects/commit/9ae3cfea0a9434afb8cdc6c84ee7d5bf5e8ff100))
* make heading stand out more visually ([4f3b7f3](https://github.com/agrc/wfrc-rtp-projects/commit/4f3b7f35a6031ba8efd2a1440c9cf97be14825c7))
* make limit to needs text italic ([2f13742](https://github.com/agrc/wfrc-rtp-projects/commit/2f1374228d536540919036b91b8a0a04a02d7a84))
* make udot facilities checkbox look visually distinct from others ([a48c148](https://github.com/agrc/wfrc-rtp-projects/commit/a48c1484818c30dc86aa499f82a215c3a122c39b))
* make udot ownership and other checkboxes apply only to the project type that they are contained in ([1207e62](https://github.com/agrc/wfrc-rtp-projects/commit/1207e62a47fe6e4cb07263260337cb9db622b99e))
* match labels colors to legend swatches ([86188ef](https://github.com/agrc/wfrc-rtp-projects/commit/86188eff2b728139882bbf75aa0a167d51688e06)), closes [#16](https://github.com/agrc/wfrc-rtp-projects/issues/16)
* move limit facilities from transit to active transportation ([758193e](https://github.com/agrc/wfrc-rtp-projects/commit/758193eceaf864061bccdca258d565482e5e3306))
* November dependency bumps 🌲 ([4362500](https://github.com/agrc/wfrc-rtp-projects/commit/4362500ad58a0adf87d16e59ba397799d7cebda7))
* October dependency bumps 🌲 ([25365f3](https://github.com/agrc/wfrc-rtp-projects/commit/25365f370b1d98d686f6b1aefe71abf80a4d5fb5))
* once function parameter should be a function ([86f2d55](https://github.com/agrc/wfrc-rtp-projects/commit/86f2d55ad166d3c4d20a844d7aa544060666ee43))
* only deploy to prod on main branch ([8266365](https://github.com/agrc/wfrc-rtp-projects/commit/8266365049624166c54bd2121d6e27b2d8749db8))
* prevent crash when searching for multiple projects ([ad00ccb](https://github.com/agrc/wfrc-rtp-projects/commit/ad00ccbe63c277a06a713561e8316ab12cae59cd)), closes [#221](https://github.com/agrc/wfrc-rtp-projects/issues/221)
* prevent url updates to add to the browser history ([dc60da4](https://github.com/agrc/wfrc-rtp-projects/commit/dc60da437e00aa1556a8018319ea4ac3068033e6))
* Q2 Dep Bumps 🌲 ([42b2699](https://github.com/agrc/wfrc-rtp-projects/commit/42b26995643ea96c7c15a9becf24827503dd91d5))
* Q3 Dependency Bumps 🌲 ([56c4ef1](https://github.com/agrc/wfrc-rtp-projects/commit/56c4ef13e562895ea97df8f983def3ebdedc29cf))
* remove "in millions" text from cost filter ([ea31ee0](https://github.com/agrc/wfrc-rtp-projects/commit/ea31ee0320e9122d31c7aef581bdf80156624b51))
* remove reference to missing node version file ([a282961](https://github.com/agrc/wfrc-rtp-projects/commit/a2829611e764428c75b61a9a417f00773df380ec))
* sanity test ([21a8429](https://github.com/agrc/wfrc-rtp-projects/commit/21a8429b0f4451aa583d2c4348d31e80590f3f57))
* select/unselect all should ignore udot ownership checkboxes ([7b0e21e](https://github.com/agrc/wfrc-rtp-projects/commit/7b0e21ee8675f991f8d8a13b9002fdea5941ab77))
* simplify ownership filter ([9d96c20](https://github.com/agrc/wfrc-rtp-projects/commit/9d96c20b48fc0478ff488a2dc36f9828b4c3e34e)), closes [#8](https://github.com/agrc/wfrc-rtp-projects/issues/8)
* switch active/inactive tab colors ([4ae9737](https://github.com/agrc/wfrc-rtp-projects/commit/4ae97378baa982e187f53b75c3b94a602961bcdc)), closes [#30](https://github.com/agrc/wfrc-rtp-projects/issues/30)
* **tooling:** release body param ([12444ae](https://github.com/agrc/wfrc-rtp-projects/commit/12444ae69cd3d4ac94f787ac417bba12caeca69f))
* **tooling:** remove working dir ([87dc208](https://github.com/agrc/wfrc-rtp-projects/commit/87dc208ae444238f8e725d154814f6a38c618e71))
* turning off all primary checkboxes hides all features ([61d2246](https://github.com/agrc/wfrc-rtp-projects/commit/61d22469bdf719cf6287ddc1b1a5394a07c0e303))
* unit test import ([51367c1](https://github.com/agrc/wfrc-rtp-projects/commit/51367c129fdbd947d40b2b11741bdaf9c14483f5))
* unselecting all should remove all features for that project type ([6ef6a65](https://github.com/agrc/wfrc-rtp-projects/commit/6ef6a6524e5dc1cfa1c64363392ad1eaff1840c9))
* update about content ([8333106](https://github.com/agrc/wfrc-rtp-projects/commit/8333106a69926f229220c00cd4ac91cdebfae77c))
* update config from production ([cf4c13d](https://github.com/agrc/wfrc-rtp-projects/commit/cf4c13d82e6fc9135aadf7e2e88e9058e942d2d9))
* update firebase project name ([98eeb6b](https://github.com/agrc/wfrc-rtp-projects/commit/98eeb6bee6cee2ee2278b6635d205ad6229e5f62))
* update layer defs on use phasing change ([d8b4294](https://github.com/agrc/wfrc-rtp-projects/commit/d8b429406059e7ba4b417d750861de202c3c989f))
* use new value for attribute style for web api ([870072b](https://github.com/agrc/wfrc-rtp-projects/commit/870072be4ad4d772ba3c708db5d162042400a14c))
* UX improvements for cost filter ([733b90b](https://github.com/agrc/wfrc-rtp-projects/commit/733b90b971e84b883a9dfcfda300b2b8e7e9071c)), closes [#32](https://github.com/agrc/wfrc-rtp-projects/issues/32)
* when closing advanced filter, scroll simple controls into view ([a436c68](https://github.com/agrc/wfrc-rtp-projects/commit/a436c68d1a7703bb2463576cd1b2bbf738d3110c)), closes [#44](https://github.com/agrc/wfrc-rtp-projects/issues/44)
* wire up config.splashScreen.enabled config ([009718a](https://github.com/agrc/wfrc-rtp-projects/commit/009718a8d729ea0084ec97c971f5e7de1da4b290))


### Dependencies

* bump dependencies 🌲 ([395e644](https://github.com/agrc/wfrc-rtp-projects/commit/395e6444d3333023d3f6581ae019d6b923f36027))
* bump deps 🌲 ([de8bf29](https://github.com/agrc/wfrc-rtp-projects/commit/de8bf29e38b60b6a6bd42a9d11fec06553a29e3b))
* bump the safe-dependencies group with 6 updates ([dd4cffe](https://github.com/agrc/wfrc-rtp-projects/commit/dd4cffe5526e14b3bb7a8613ff807f49de54a309))
* **dev:** bump @babel/traverse from 7.23.0 to 7.23.2 ([9127add](https://github.com/agrc/wfrc-rtp-projects/commit/9127add3844b3b8f7d1aad647fa1a9b45e49b01e))
* **dev:** bump eslint-plugin-storybook in the safe-dependencies group ([7bc93ed](https://github.com/agrc/wfrc-rtp-projects/commit/7bc93ed013c48a471d4ebb1abea0d59ef062d404))
* **dev:** bump express from 4.18.2 to 4.19.2 ([152c421](https://github.com/agrc/wfrc-rtp-projects/commit/152c421b8662f2e20aeb2d33e7f54a5e45584dbc))
* **dev:** bump ip from 2.0.0 to 2.0.1 ([4badb1f](https://github.com/agrc/wfrc-rtp-projects/commit/4badb1fce4b2acbba99bd4f1cc3c64c7a42b1d83))
* **dev:** bump phin from 3.7.0 to 3.7.1 ([8226c41](https://github.com/agrc/wfrc-rtp-projects/commit/8226c412a4d69914b8bb86c1cb8b6f29680724c8))
* one final Q1 bump ([596810f](https://github.com/agrc/wfrc-rtp-projects/commit/596810fbb25adeda4b5cb820d142e35898c41e6d))
* Q1 dependency bumps 🌲 ([1bfe22a](https://github.com/agrc/wfrc-rtp-projects/commit/1bfe22a57c892770802700a903e69dc960e22780))
* storybook v7 -&gt; v8 ([d201ef0](https://github.com/agrc/wfrc-rtp-projects/commit/d201ef032e7496339896c9bdec720730bc443dea))


### Documentation

* add app links ([6a6c612](https://github.com/agrc/wfrc-rtp-projects/commit/6a6c612cb203986681270f2f2eae890e57d14e93))
* add link to mockups ([4fd1363](https://github.com/agrc/wfrc-rtp-projects/commit/4fd1363ad79fcf230eb6f3979c87a42e14f65fec))
* add link to spreadsheet from Matthew ([f753ebc](https://github.com/agrc/wfrc-rtp-projects/commit/f753ebcfc059559429bcf151812fe60c603070a0))
* CRA -&gt; Vite ([0db040d](https://github.com/agrc/wfrc-rtp-projects/commit/0db040dbef169d67a60b341bfe242bc4a590aa1e))
* point changelog.md at github releases from now on ([5abbafe](https://github.com/agrc/wfrc-rtp-projects/commit/5abbafed8e6229167a538ee419f5b170ea9d0a1c))
* remove incorrect comment in changelog ([aa58de8](https://github.com/agrc/wfrc-rtp-projects/commit/aa58de82f3821e6325e61880c7be24f4afa87b1b))
* update config docs ([a4f2f40](https://github.com/agrc/wfrc-rtp-projects/commit/a4f2f40974f7f6ab0877ac6378a567f5c91d744d))
* update config docs ([01cbbad](https://github.com/agrc/wfrc-rtp-projects/commit/01cbbadfdb6ce1182bf4e2ebe8b9d89cbe542bfd))
* update config docs ([74944b5](https://github.com/agrc/wfrc-rtp-projects/commit/74944b5cc041961a424e068710f3aa8a645eeaad))
* update config docs ([fe2afcf](https://github.com/agrc/wfrc-rtp-projects/commit/fe2afcf32d5cab16bb22bc5dc8d535bcf322d63d))
* update config docs ([f6e7022](https://github.com/agrc/wfrc-rtp-projects/commit/f6e70221bfaed3a949a6ac35c3a0e80b4003527a))
* update config docs ([9b016f8](https://github.com/agrc/wfrc-rtp-projects/commit/9b016f83e32cf67ebc5aa6c8fec83c8f6c38ed41))
* update config docs ([ef6c8d1](https://github.com/agrc/wfrc-rtp-projects/commit/ef6c8d162a9f87d5605dde9a8ae80b4dd706bc37))
* update config docs ([016494e](https://github.com/agrc/wfrc-rtp-projects/commit/016494e21bcd9867ee6a8946e9c8a73dc0bd4687))


### Styles

* add browser as eslint environment ([abf3886](https://github.com/agrc/wfrc-rtp-projects/commit/abf38864d660b559a13a08087a86de8091144b81))
* add eslint recommended ([aaccdb6](https://github.com/agrc/wfrc-rtp-projects/commit/aaccdb639c01ad203201e527b17efdb9d84bdd65))
* add margin to details to avoid cutting off content ([07d9c5a](https://github.com/agrc/wfrc-rtp-projects/commit/07d9c5aaa32a25ac00dc0d7648597bb66bade4b7))
* standardize checkbox indentation ([9bc5d27](https://github.com/agrc/wfrc-rtp-projects/commit/9bc5d27ad5bd5eb8eb125dbc1a5d8b057bf64b70))
* wrap error message in fallback dialog ([449c39b](https://github.com/agrc/wfrc-rtp-projects/commit/449c39b27e8dfe0e75b04f8d6e7969bed06d534f))

## [5.3.6-0](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.5...v5.3.6-0) (2024-08-15)

### Bug Fixes

- update config from production ([cf4c13d](https://github.com/agrc/wfrc-rtp-projects/commit/cf4c13d82e6fc9135aadf7e2e88e9058e942d2d9))

### Styles

- add margin to details to avoid cutting off content ([07d9c5a](https://github.com/agrc/wfrc-rtp-projects/commit/07d9c5aaa32a25ac00dc0d7648597bb66bade4b7))

## [5.3.6](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.5...v5.3.6) (2024-08-15)

### Styles

- add margin to details to avoid cutting off content ([07d9c5a](https://github.com/agrc/wfrc-rtp-projects/commit/07d9c5aaa32a25ac00dc0d7648597bb66bade4b7))

## [5.3.6-0](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.5...v5.3.6-0) (2024-08-15)

### Bug Fixes

- update config from production ([cf4c13d](https://github.com/agrc/wfrc-rtp-projects/commit/cf4c13d82e6fc9135aadf7e2e88e9058e942d2d9))

### Styles

- add margin to details to avoid cutting off content ([07d9c5a](https://github.com/agrc/wfrc-rtp-projects/commit/07d9c5aaa32a25ac00dc0d7648597bb66bade4b7))

## [5.3.5](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.3...v5.3.5) (2024-08-08)

### Bug Fixes

- app version log ([f52b925](https://github.com/agrc/wfrc-rtp-projects/commit/f52b925ff181bf657a12a00db075821306edbdfa))
- update about content ([8333106](https://github.com/agrc/wfrc-rtp-projects/commit/8333106a69926f229220c00cd4ac91cdebfae77c))
- use new value for attribute style for web api ([870072b](https://github.com/agrc/wfrc-rtp-projects/commit/870072be4ad4d772ba3c708db5d162042400a14c))

### Dependencies

- one final Q1 bump ([596810f](https://github.com/agrc/wfrc-rtp-projects/commit/596810fbb25adeda4b5cb820d142e35898c41e6d))
- Q1 dependency bumps 🌲 ([1bfe22a](https://github.com/agrc/wfrc-rtp-projects/commit/1bfe22a57c892770802700a903e69dc960e22780))
- storybook v7 -&gt; v8 ([d201ef0](https://github.com/agrc/wfrc-rtp-projects/commit/d201ef032e7496339896c9bdec720730bc443dea))

### Documentation

- update config docs ([a4f2f40](https://github.com/agrc/wfrc-rtp-projects/commit/a4f2f40974f7f6ab0877ac6378a567f5c91d744d))

## [5.3.4](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.3...v5.3.4) (2024-07-05)

### Bug Fixes

- app version log ([f52b925](https://github.com/agrc/wfrc-rtp-projects/commit/f52b925ff181bf657a12a00db075821306edbdfa))
- update about content ([8333106](https://github.com/agrc/wfrc-rtp-projects/commit/8333106a69926f229220c00cd4ac91cdebfae77c))

### Dependencies

- one final Q1 bump ([596810f](https://github.com/agrc/wfrc-rtp-projects/commit/596810fbb25adeda4b5cb820d142e35898c41e6d))
- Q1 dependency bumps 🌲 ([1bfe22a](https://github.com/agrc/wfrc-rtp-projects/commit/1bfe22a57c892770802700a903e69dc960e22780))
- storybook v7 -&gt; v8 ([d201ef0](https://github.com/agrc/wfrc-rtp-projects/commit/d201ef032e7496339896c9bdec720730bc443dea))

## [5.3.3](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.2...v5.3.3) (2024-04-12)

### 🌲 Dependencies

- **dev:** bump eslint-plugin-storybook in the safe-dependencies group ([7bc93ed](https://github.com/agrc/wfrc-rtp-projects/commit/7bc93ed013c48a471d4ebb1abea0d59ef062d404))
- **dev:** bump express from 4.18.2 to 4.19.2 ([152c421](https://github.com/agrc/wfrc-rtp-projects/commit/152c421b8662f2e20aeb2d33e7f54a5e45584dbc))
- **dev:** bump ip from 2.0.0 to 2.0.1 ([4badb1f](https://github.com/agrc/wfrc-rtp-projects/commit/4badb1fce4b2acbba99bd4f1cc3c64c7a42b1d83))
- **dev:** bump phin from 3.7.0 to 3.7.1 ([8226c41](https://github.com/agrc/wfrc-rtp-projects/commit/8226c412a4d69914b8bb86c1cb8b6f29680724c8))

## [5.3.2](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.1...v5.3.2) (2024-02-09)

### 🐛 Bug Fixes

- another try at fixing the sherlock project search crash ([bfa8a7b](https://github.com/agrc/wfrc-rtp-projects/commit/bfa8a7b26590c4f5c7ad86a44ad9d1aae45dea31)), closes [#221](https://github.com/agrc/wfrc-rtp-projects/issues/221)
- prevent crash when searching for multiple projects ([ad00ccb](https://github.com/agrc/wfrc-rtp-projects/commit/ad00ccbe63c277a06a713561e8316ab12cae59cd)), closes [#221](https://github.com/agrc/wfrc-rtp-projects/issues/221)

### 🌲 Dependencies

- bump deps 🌲 ([de8bf29](https://github.com/agrc/wfrc-rtp-projects/commit/de8bf29e38b60b6a6bd42a9d11fec06553a29e3b))
- **dev:** bump @babel/traverse from 7.23.0 to 7.23.2 ([9127add](https://github.com/agrc/wfrc-rtp-projects/commit/9127add3844b3b8f7d1aad647fa1a9b45e49b01e))

### 📖 Documentation Improvements

- remove incorrect comment in changelog ([aa58de8](https://github.com/agrc/wfrc-rtp-projects/commit/aa58de82f3821e6325e61880c7be24f4afa87b1b))

## [5.3.2-1](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.2-0...v5.3.2-1) (2024-02-06)

### 🐛 Bug Fixes

- another try at fixing the sherlock project search crash ([73bdd06](https://github.com/agrc/wfrc-rtp-projects/commit/73bdd06988c31ac924e7223d530242413ddf441b)), closes [#221](https://github.com/agrc/wfrc-rtp-projects/issues/221)

## [5.3.2-0](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.1...v5.3.2-0) (2024-02-06)

### 🐛 Bug Fixes

- prevent crash when searching for multiple projects ([906f315](https://github.com/agrc/wfrc-rtp-projects/commit/906f315df3041ef1c65af1b21087e88c74922f69)), closes [#221](https://github.com/agrc/wfrc-rtp-projects/issues/221)

### 🌲 Dependencies

- bump deps 🌲 ([dda59bb](https://github.com/agrc/wfrc-rtp-projects/commit/dda59bb064d473f38a35952d854506971f63b6a4))
- **dev:** bump @babel/traverse from 7.23.0 to 7.23.2 ([9127add](https://github.com/agrc/wfrc-rtp-projects/commit/9127add3844b3b8f7d1aad647fa1a9b45e49b01e))

## [5.3.1](https://github.com/agrc/wfrc-rtp-projects/compare/v5.3.0...v5.3.1) (2023-10-13)

### 🌲 Dependencies

- bump the safe-dependencies group with 6 updates ([dd4cffe](https://github.com/agrc/wfrc-rtp-projects/commit/dd4cffe5526e14b3bb7a8613ff807f49de54a309))

## [5.3.0](https://github.com/agrc/wfrc-rtp-projects/compare/v5.2.0...v5.3.0) (2023-10-06)

### 🚀 Features

- add google analytics ([27db32c](https://github.com/agrc/wfrc-rtp-projects/commit/27db32c7f18fcbcf98bf59d64c457af0575c68fe))

### 🐛 Bug Fixes

- env var substitution ([331ad33](https://github.com/agrc/wfrc-rtp-projects/commit/331ad338b944f8d36c0af084c133574cee7d26c1))
- unit test import ([51367c1](https://github.com/agrc/wfrc-rtp-projects/commit/51367c129fdbd947d40b2b11741bdaf9c14483f5))

### 📖 Documentation Improvements

- add app links ([6a6c612](https://github.com/agrc/wfrc-rtp-projects/commit/6a6c612cb203986681270f2f2eae890e57d14e93))
- update config docs ([01cbbad](https://github.com/agrc/wfrc-rtp-projects/commit/01cbbadfdb6ce1182bf4e2ebe8b9d89cbe542bfd))

## [5.2.0](https://github.com/agrc/wfrc-rtp-projects/compare/v5.1.0...v5.2.0) (2023-09-12)

### 🚀 Features

- add vision refresh basemap to layer selector ([aa55df4](https://github.com/agrc/wfrc-rtp-projects/commit/aa55df40b9ef217f0d2790724f8d4e35e5ca7b4d))

## [5.1.0](https://github.com/agrc/wfrc-rtp-projects/compare/v5.0.3...v5.1.0) (2023-07-21)

### 🚀 Features

- add optional help popup to advanced filter checkboxes ([d221c10](https://github.com/agrc/wfrc-rtp-projects/commit/d221c10ca9237142e87492797e95d4973490831f))

### 🌲 Dependencies

- bump dependencies 🌲 ([395e644](https://github.com/agrc/wfrc-rtp-projects/commit/395e6444d3333023d3f6581ae019d6b923f36027))

## [5.0.3](https://github.com/agrc/wfrc-rtp-projects/compare/v5.0.2...v5.0.3) (2023-07-12)

### 🐛 Bug Fixes

- update firebase project name ([98eeb6b](https://github.com/agrc/wfrc-rtp-projects/commit/98eeb6bee6cee2ee2278b6635d205ad6229e5f62))

## [5.0.2](https://github.com/agrc/wfrc-rtp-projects/compare/v5.0.1...v5.0.2) (2023-07-04)

### 🐛 Bug Fixes

- Q3 Dependency Bumps 🌲 ([56c4ef1](https://github.com/agrc/wfrc-rtp-projects/commit/56c4ef13e562895ea97df8f983def3ebdedc29cf))

## [5.0.1](https://github.com/agrc/wfrc-rtp-projects/compare/v5.0.0...v5.0.1) (2023-05-18)

### 🐛 Bug Fixes

- enable arcade expressions in project information component ([baa7ccb](https://github.com/agrc/wfrc-rtp-projects/commit/baa7ccbe39cba95607f8d81906ed20e89a5d8b4b))

## [5.0.0](https://github.com/agrc/wfrc-rtp-projects/compare/v3.0.2...v5.0.0) (2023-04-13)

### ⚠ BREAKING CHANGES

- added `rtpInfoLink` required config prop
- Added `aboutTitle` required config

### 🐛 Bug Fixes

- bump deps 🌲 ([c389c14](https://github.com/agrc/wfrc-rtp-projects/commit/c389c144d33be21bf618b8b8c98212963484b691))
- fix rebuild-docs action ([8ed87da](https://github.com/agrc/wfrc-rtp-projects/commit/8ed87da54134b3394b7c090f7fc0c64331872139))
- go back to no top-level async/await ([9f0c864](https://github.com/agrc/wfrc-rtp-projects/commit/9f0c8644769ae3d03f5d7cf95b9d423a310ca4bd))

### 🚀 Features

- add "Limit to [no] ROW needed" filter control ([c6d2eb1](https://github.com/agrc/wfrc-rtp-projects/commit/c6d2eb1daedf10f6ae8ca7d547fe49b381610a83)), closes [#152](https://github.com/agrc/wfrc-rtp-projects/issues/152)
- add about sidebar collapsible panel ([57cb3fa](https://github.com/agrc/wfrc-rtp-projects/commit/57cb3fa9b94c468621abd2db5b9709e2b9597aec)), closes [#151](https://github.com/agrc/wfrc-rtp-projects/issues/151)
- add configurable "RTP Info" link to header ([670b98b](https://github.com/agrc/wfrc-rtp-projects/commit/670b98bd6a293e55dc0944408ac95858bae4c316)), closes [#150](https://github.com/agrc/wfrc-rtp-projects/issues/150)
- add modes config to limit controls ([044fc88](https://github.com/agrc/wfrc-rtp-projects/commit/044fc883f88aba95733d75850f2d04262d8cd1f5)), closes [#168](https://github.com/agrc/wfrc-rtp-projects/issues/168)

### 📖 Documentation Improvements

- update config docs ([f6e7022](https://github.com/agrc/wfrc-rtp-projects/commit/f6e70221bfaed3a949a6ac35c3a0e80b4003527a))
- update config docs ([9b016f8](https://github.com/agrc/wfrc-rtp-projects/commit/9b016f83e32cf67ebc5aa6c8fec83c8f6c38ed41))

## [4.1.0-0](https://github.com/agrc/wfrc-rtp-projects/compare/v4.0.0-1...v4.1.0-0) (2023-04-12)

### 🚀 Features

- add modes config to limit controls ([4b4b928](https://github.com/agrc/wfrc-rtp-projects/commit/4b4b928e13852263fa103b42a0d7af2f82359249)), closes [#168](https://github.com/agrc/wfrc-rtp-projects/issues/168)

## [4.0.0-1](https://github.com/agrc/wfrc-rtp-projects/compare/v4.0.0-0...v4.0.0-1) (2023-04-10)

### 🐛 Bug Fixes

- go back to no top-level async/await ([6e856e5](https://github.com/agrc/wfrc-rtp-projects/commit/6e856e53b5fbd4a71bd97c2cfd8e9b354636b749))

## [4.0.0-0](https://github.com/agrc/wfrc-rtp-projects/compare/v3.0.2...v4.0.0-0) (2023-04-10)

### ⚠ BREAKING CHANGES

- added `rtpInfoLink` required config prop
- Added `aboutTitle` required config

### 🚀 Features

- add "Limit to [no] ROW needed" filter control ([cd38f80](https://github.com/agrc/wfrc-rtp-projects/commit/cd38f80e7a777d8bf774e5dd2df24caf9d581346)), closes [#152](https://github.com/agrc/wfrc-rtp-projects/issues/152)
- add about sidebar collapsible panel ([9b2e7a4](https://github.com/agrc/wfrc-rtp-projects/commit/9b2e7a4f5797ca9e23e348187d065c880aa0f879)), closes [#151](https://github.com/agrc/wfrc-rtp-projects/issues/151)
- add configurable "RTP Info" link to header ([fbce841](https://github.com/agrc/wfrc-rtp-projects/commit/fbce841359a461e8515e1c24be9ac39b582f0bd8)), closes [#150](https://github.com/agrc/wfrc-rtp-projects/issues/150)

### 🐛 Bug Fixes

- bump deps 🌲 ([43ad898](https://github.com/agrc/wfrc-rtp-projects/commit/43ad898fb7bba9b911353a3b2eddeff66e3d2ed0))
- fix rebuild-docs action ([5562e65](https://github.com/agrc/wfrc-rtp-projects/commit/5562e656c9e1b42a064c110b3d3bd518566fdc52))

### 📖 Documentation Improvements

- update config docs ([b744382](https://github.com/agrc/wfrc-rtp-projects/commit/b744382e83974225dce1d1ca3f706c27c3b92a64))

## [3.0.2](https://github.com/agrc/wfrc-rtp-projects/compare/v3.0.1...v3.0.2) (2023-04-04)

### 🐛 Bug Fixes

- remove reference to missing node version file ([a282961](https://github.com/agrc/wfrc-rtp-projects/commit/a2829611e764428c75b61a9a417f00773df380ec))

## [3.0.1](https://github.com/agrc/wfrc-rtp-projects/compare/v3.0.0...v3.0.1) (2023-04-04)

### 🐛 Bug Fixes

- January dependency bumps 🌲 ([9ae3cfe](https://github.com/agrc/wfrc-rtp-projects/commit/9ae3cfea0a9434afb8cdc6c84ee7d5bf5e8ff100))
- Q2 Dep Bumps 🌲 ([42b2699](https://github.com/agrc/wfrc-rtp-projects/commit/42b26995643ea96c7c15a9becf24827503dd91d5))

## [3.0.0](https://github.com/agrc/wfrc-rtp-projects/compare/v2.1.0...v3.0.0) (2022-12-16)

### ⚠ BREAKING CHANGES

- Added the following config props under `layerSelector`:
  - `BWName`
  - `BWOpacity`
- `projectInformation` config changes: `commentsEnabled` and `commentsEnabledUntil` have been replaced with `showComments`, `newCommentsEnabled`, and `newCommentsEnabledUtil`. See the updated docs for details.

### 📖 Documentation Improvements

- update config docs ([ef6c8d1](https://github.com/agrc/wfrc-rtp-projects/commit/ef6c8d162a9f87d5605dde9a8ae80b4dd706bc37))

### 🚀 Features

- add support for black and white imagery base map ([0543008](https://github.com/agrc/wfrc-rtp-projects/commit/05430089a2da24fab35c9b369e98e0fe406a4baf)), closes [#110](https://github.com/agrc/wfrc-rtp-projects/issues/110)
- use separate configs for viewing existing and submitting new comments ([7e7b7ce](https://github.com/agrc/wfrc-rtp-projects/commit/7e7b7ce1fc2faa5325cbd4dd28a770fbde686a83)), closes [#124](https://github.com/agrc/wfrc-rtp-projects/issues/124)

### 🐛 Bug Fixes

- add mission output ([ce1aa4e](https://github.com/agrc/wfrc-rtp-projects/commit/ce1aa4e7cf0f2bbce82003f5b79c24041f5b88b1))
- December dependency bumps 🌲 ([f0f93f5](https://github.com/agrc/wfrc-rtp-projects/commit/f0f93f5cc9eb2125874cd90520eb14d50023b2ea))
- disable new comments ([50151d6](https://github.com/agrc/wfrc-rtp-projects/commit/50151d69339a491ec405fb03feb64522a3df290e))
- fix release output name ([1d14c95](https://github.com/agrc/wfrc-rtp-projects/commit/1d14c9500a71c1dcacc0adf893cd665089669073))
- November dependency bumps 🌲 ([4362500](https://github.com/agrc/wfrc-rtp-projects/commit/4362500ad58a0adf87d16e59ba397799d7cebda7))
- October dependency bumps 🌲 ([25365f3](https://github.com/agrc/wfrc-rtp-projects/commit/25365f370b1d98d686f6b1aefe71abf80a4d5fb5))
- once function parameter should be a function ([86f2d55](https://github.com/agrc/wfrc-rtp-projects/commit/86f2d55ad166d3c4d20a844d7aa544060666ee43))
- only deploy to prod on main branch ([8266365](https://github.com/agrc/wfrc-rtp-projects/commit/8266365049624166c54bd2121d6e27b2d8749db8))

## [3.0.0-4](https://github.com/agrc/wfrc-rtp-projects/compare/v3.0.0-3...v3.0.0-4) (2022-12-16)

### 🐛 Bug Fixes

- disable new comments ([7c015b8](https://github.com/agrc/wfrc-rtp-projects/commit/7c015b85988607ce6fd4090d2065e54680299d74))

## [3.0.0-3](https://github.com/agrc/wfrc-rtp-projects/compare/v3.0.0-2...v3.0.0-3) (2022-12-16)

### 🐛 Bug Fixes

- add mission output ([ad7142d](https://github.com/agrc/wfrc-rtp-projects/commit/ad7142d3ebf4b6211d27bbd8da934f54cb2b2e7c))

## [3.0.0-2](https://github.com/agrc/wfrc-rtp-projects/compare/v3.0.0-1...v3.0.0-2) (2022-12-16)

### 🐛 Bug Fixes

- fix release output name ([1ee55b3](https://github.com/agrc/wfrc-rtp-projects/commit/1ee55b35b43cc337e2db83a21296243574a57841))

## [3.0.0-1](https://github.com/agrc/wfrc-rtp-projects/compare/v3.0.0-0...v3.0.0-1) (2022-12-16)

### 🐛 Bug Fixes

- only deploy to prod on main branch ([b403bca](https://github.com/agrc/wfrc-rtp-projects/commit/b403bca7773ed9a9146005c85a203c9433a2114b))

## [3.0.0-0](https://github.com/agrc/wfrc-rtp-projects/compare/v2.1.0...v3.0.0-0) (2022-12-15)

### ⚠ BREAKING CHANGES

- Added the following config props under `layerSelector`:
  - `BWName`
  - `BWOpacity`
- `projectInformation` config changes: `commentsEnabled` and `commentsEnabledUntil` have been replaced with `showComments`, `newCommentsEnabled`, and `newCommentsEnabledUtil`. See the updated docs for details.

### 📖 Documentation Improvements

- update config docs ([ef6c8d1](https://github.com/agrc/wfrc-rtp-projects/commit/ef6c8d162a9f87d5605dde9a8ae80b4dd706bc37))

### 🐛 Bug Fixes

- December dependency bumps 🌲 ([aad330a](https://github.com/agrc/wfrc-rtp-projects/commit/aad330af59efe7d24facde80718c293e3c31e755))
- November dependency bumps 🌲 ([4362500](https://github.com/agrc/wfrc-rtp-projects/commit/4362500ad58a0adf87d16e59ba397799d7cebda7))
- October dependency bumps 🌲 ([25365f3](https://github.com/agrc/wfrc-rtp-projects/commit/25365f370b1d98d686f6b1aefe71abf80a4d5fb5))
- once function parameter should be a function ([86f2d55](https://github.com/agrc/wfrc-rtp-projects/commit/86f2d55ad166d3c4d20a844d7aa544060666ee43))

### 🚀 Features

- add support for black and white imagery base map ([29b35fa](https://github.com/agrc/wfrc-rtp-projects/commit/29b35fa95c6ca735246013a2ec80e71f54a34db4)), closes [#110](https://github.com/agrc/wfrc-rtp-projects/issues/110)
- use separate configs for viewing existing and submitting new comments ([bbcaaef](https://github.com/agrc/wfrc-rtp-projects/commit/bbcaaef48a2d4c88c34fccea4e4484ed675d1fc8)), closes [#124](https://github.com/agrc/wfrc-rtp-projects/issues/124)

## [2.1.0](https://github.com/agrc/wfrc-rtp-projects/compare/wfrc-rtp-projects-v2.0.2...wfrc-rtp-projects-v2.1.0) (2022-09-09)

### Features

- added info popup to use phasing ([98d87ad](https://github.com/agrc/wfrc-rtp-projects/commit/98d87adf40fddae3443344cba66bee620f796b1a))

## [2.0.2](https://github.com/agrc/wfrc-rtp-projects/compare/wfrc-rtp-projects-v2.0.1...wfrc-rtp-projects-v2.0.2) (2022-09-07)

### Bug Fixes

- wire up config.splashScreen.enabled config ([009718a](https://github.com/agrc/wfrc-rtp-projects/commit/009718a8d729ea0084ec97c971f5e7de1da4b290))

## [2.0.1](https://github.com/agrc/wfrc-rtp-projects/compare/wfrc-rtp-projects-v2.0.0...wfrc-rtp-projects-v2.0.1) (2022-09-07)

### Bug Fixes

- fix react router bug causing the app to be blank when hosted in a subdirectory ([7a41dc5](https://github.com/agrc/wfrc-rtp-projects/commit/7a41dc57e1ea4d2e10c1c91045e0fd973fdfb232))

## [2.0.0](https://github.com/agrc/wfrc-rtp-projects/compare/wfrc-rtp-projects-v1.2.1...wfrc-rtp-projects-v2.0.0) (2022-09-05)

### ⚠ BREAKING CHANGES

- A new filter config property, `limitFacilityType`, has been added. Also, the `useAnd` and `offByDefault` options have been removed since they are no longer needed.
- `defaultExtent` needs to be added to your config.
- The `projectInformation.newCommentsOpenUtil` config value has been renamed to `commentsEnabledUntil`.

### Features

- add defaultExtent config value ([dc76865](https://github.com/agrc/wfrc-rtp-projects/commit/dc768652fafe1a2c720938a4694f98b568285ca3))
- add filter state as url query parameter ([b4d68d9](https://github.com/agrc/wfrc-rtp-projects/commit/b4d68d90986bec0a53edf05ecce984ac6c9b0fba)), closes [#13](https://github.com/agrc/wfrc-rtp-projects/issues/13)
- add firebase deploy action for dev ([6a32dc9](https://github.com/agrc/wfrc-rtp-projects/commit/6a32dc9cd072c278962f087da7def846b833d9e3))
- add selected project as a url parameter ([f1e200e](https://github.com/agrc/wfrc-rtp-projects/commit/f1e200e7a78df6f82df27d1f21ec948c98581c23)), closes [#13](https://github.com/agrc/wfrc-rtp-projects/issues/13)
- add udot/local toggle to facility type limit checkboxes ([c08be8f](https://github.com/agrc/wfrc-rtp-projects/commit/c08be8f69998951d3f7eebd5262b3b0d7c37694e)), closes [#70](https://github.com/agrc/wfrc-rtp-projects/issues/70)
- add url parameters for preserving map extent ([640a4b4](https://github.com/agrc/wfrc-rtp-projects/commit/640a4b44e25f097b07097ab99d40de824d8ac3e4)), closes [#13](https://github.com/agrc/wfrc-rtp-projects/issues/13)
- cut prereleases in dev ([c1824d3](https://github.com/agrc/wfrc-rtp-projects/commit/c1824d34baaa74b6899421dc370383a710fbcf78))
- implement "Limit to Needs Phase..." checkbox ([dfdda0b](https://github.com/agrc/wfrc-rtp-projects/commit/dfdda0b38cb34ddac3394348f43d62b88ca80fc3)), closes [#69](https://github.com/agrc/wfrc-rtp-projects/issues/69)
- implement commentsEnabledUntil config ([048a663](https://github.com/agrc/wfrc-rtp-projects/commit/048a663f89c35d4955d362b705d57f94d84782e0)), closes [#66](https://github.com/agrc/wfrc-rtp-projects/issues/66)
- implement layer selector ([fce296d](https://github.com/agrc/wfrc-rtp-projects/commit/fce296dbd43187f61edaafacaa37feca3ba4a01d)), closes [#63](https://github.com/agrc/wfrc-rtp-projects/issues/63) [#64](https://github.com/agrc/wfrc-rtp-projects/issues/64)
- implement splash screen ([de576fa](https://github.com/agrc/wfrc-rtp-projects/commit/de576fa460dd302346479cbbb2e11842ffeef0bc)), closes [#65](https://github.com/agrc/wfrc-rtp-projects/issues/65)
- open advanced filter on load if url params have changed filter params ([62f98b1](https://github.com/agrc/wfrc-rtp-projects/commit/62f98b17e8509407dbd441e79d7197d484943660)), closes [#89](https://github.com/agrc/wfrc-rtp-projects/issues/89)

### Bug Fixes

- base map selector - Imagery -> Hybrid ([150cc32](https://github.com/agrc/wfrc-rtp-projects/commit/150cc3211b5a525eea5c3146c83f3d0116123b89))
- make limit to needs text italic ([2f13742](https://github.com/agrc/wfrc-rtp-projects/commit/2f1374228d536540919036b91b8a0a04a02d7a84))
- move limit facilities from transit to active transportation ([758193e](https://github.com/agrc/wfrc-rtp-projects/commit/758193eceaf864061bccdca258d565482e5e3306))
- prevent url updates to add to the browser history ([dc60da4](https://github.com/agrc/wfrc-rtp-projects/commit/dc60da437e00aa1556a8018319ea4ac3068033e6))

### [1.2.1](https://github.com/agrc/wfrc-rtp-projects/compare/v1.2.0...v1.2.1) (2022-07-26)

### Bug Fixes

- fix cost validation error message ([0a583d4](https://github.com/agrc/wfrc-rtp-projects/commit/0a583d4ae369b571c92f647d95f8046fb35da606))

## [1.2.0](https://github.com/agrc/wfrc-rtp-projects/compare/v1.1.0...v1.2.0) (2022-07-22)

### Features

- add map widget resizer handle and other layout improvements ([b5d82e6](https://github.com/agrc/wfrc-rtp-projects/commit/b5d82e62ed38c4a2d7b959b42ac95bd308c36c54)), closes [#44](https://github.com/agrc/wfrc-rtp-projects/issues/44)
- add validation message to cost filter ([d37686a](https://github.com/agrc/wfrc-rtp-projects/commit/d37686afb16559a796b3007951fd3ffb3edc974e)), closes [#48](https://github.com/agrc/wfrc-rtp-projects/issues/48)

### Bug Fixes

- when closing advanced filter, scroll simple controls into view ([a436c68](https://github.com/agrc/wfrc-rtp-projects/commit/a436c68d1a7703bb2463576cd1b2bbf738d3110c)), closes [#44](https://github.com/agrc/wfrc-rtp-projects/issues/44)

## [1.1.0](https://github.com/agrc/wfrc-rtp-projects/compare/v1.0.0...v1.1.0) (2022-07-15)

### Features

- add project-level error boundary ([234c43c](https://github.com/agrc/wfrc-rtp-projects/commit/234c43cf8fff7e420dfb184de0dd99cdea5589f3)), closes [#47](https://github.com/agrc/wfrc-rtp-projects/issues/47)

### Bug Fixes

- financially constrained -> fiscally constrained ([75cd5bb](https://github.com/agrc/wfrc-rtp-projects/commit/75cd5bb50bb27ebfc665694258548e3355946e21))
- fix issues with limit to udot checkboxes ([61b8af8](https://github.com/agrc/wfrc-rtp-projects/commit/61b8af8f901ade74cc6f799ac161dbd9f3ac13b4)), closes [#49](https://github.com/agrc/wfrc-rtp-projects/issues/49)

## [1.0.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.6.0...v1.0.0) (2022-07-13)

### Features

- add config docs ([ff39312](https://github.com/agrc/wfrc-rtp-projects/commit/ff3931285a2ac8be9c71169dd0dde7e76be20a10)), closes [#42](https://github.com/agrc/wfrc-rtp-projects/issues/42)
- add final configurable options ([a74a3ef](https://github.com/agrc/wfrc-rtp-projects/commit/a74a3ef6fa7bc18b08e1b6da92f772f851295fcf)), closes [#9](https://github.com/agrc/wfrc-rtp-projects/issues/9)

## [0.6.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.5.0...v0.6.0) (2022-07-13)

### Features

- auto-open project info on map feature click ([8fcf25a](https://github.com/agrc/wfrc-rtp-projects/commit/8fcf25a73ae389b7f34660e728ad3d2007fcf67f))

### Bug Fixes

- make udot facilities checkbox look visually distinct from others ([a48c148](https://github.com/agrc/wfrc-rtp-projects/commit/a48c1484818c30dc86aa499f82a215c3a122c39b))
- make udot ownership and other checkboxes apply only to the project type that they are contained in ([1207e62](https://github.com/agrc/wfrc-rtp-projects/commit/1207e62a47fe6e4cb07263260337cb9db622b99e))
- select/unselect all should ignore udot ownership checkboxes ([7b0e21e](https://github.com/agrc/wfrc-rtp-projects/commit/7b0e21ee8675f991f8d8a13b9002fdea5941ab77))
- turning off all primary checkboxes hides all features ([61d2246](https://github.com/agrc/wfrc-rtp-projects/commit/61d22469bdf719cf6287ddc1b1a5394a07c0e303))
- unselecting all should remove all features for that project type ([6ef6a65](https://github.com/agrc/wfrc-rtp-projects/commit/6ef6a6524e5dc1cfa1c64363392ad1eaff1840c9))

## [0.5.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.4.0...v0.5.0) (2022-07-12)

### ⚠ BREAKING CHANGES

- The `infoText` and `projectTypes` configs have been nested under `filter`.

### Features

- add `disableAdvanced` filter config ([e40a28f](https://github.com/agrc/wfrc-rtp-projects/commit/e40a28f649bba4a74896057e906019f56ba1a0bb))
- make application title configurable ([3160c6b](https://github.com/agrc/wfrc-rtp-projects/commit/3160c6b8ce218e87d40b72afeb04ce0eff4ef1c2))

### Bug Fixes

- fix reset button regression ([b881b7c](https://github.com/agrc/wfrc-rtp-projects/commit/b881b7c4b4a8873ebd96d7e2fc69d346a9fed9e8))
- remove "in millions" text from cost filter ([ea31ee0](https://github.com/agrc/wfrc-rtp-projects/commit/ea31ee0320e9122d31c7aef581bdf80156624b51))

## [0.4.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.3.0...v0.4.0) (2022-07-11)

### Features

- port comments widget from old wab app ([e02835d](https://github.com/agrc/wfrc-rtp-projects/commit/e02835d6c8f3a23f2f8de5e93de7c0d4053d1e31)), closes [#19](https://github.com/agrc/wfrc-rtp-projects/issues/19) [#9](https://github.com/agrc/wfrc-rtp-projects/issues/9)
- port Project Information widget from wasatch choice map ([66b704c](https://github.com/agrc/wfrc-rtp-projects/commit/66b704cd3f34efde0ef73c62d6d5d2a0b9789210)), closes [#19](https://github.com/agrc/wfrc-rtp-projects/issues/19)
- pretty print sql in console logs ([1fd61a5](https://github.com/agrc/wfrc-rtp-projects/commit/1fd61a5d8b0d3f56b90fb2e64247d6d2abeb718b)), closes [#31](https://github.com/agrc/wfrc-rtp-projects/issues/31)

### Bug Fixes

- add spinners back to bootstrap ([09d1346](https://github.com/agrc/wfrc-rtp-projects/commit/09d134684c4ea03a55bd67cce03a3af98b3ee0bd))
- simplify ownership filter ([9d96c20](https://github.com/agrc/wfrc-rtp-projects/commit/9d96c20b48fc0478ff488a2dc36f9828b4c3e34e)), closes [#33](https://github.com/agrc/wfrc-rtp-projects/issues/33) [#8](https://github.com/agrc/wfrc-rtp-projects/issues/8)
- UX improvements for cost filter ([733b90b](https://github.com/agrc/wfrc-rtp-projects/commit/733b90b971e84b883a9dfcfda300b2b8e7e9071c)), closes [#32](https://github.com/agrc/wfrc-rtp-projects/issues/32)

## [0.3.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.5...v0.3.0) (2022-06-21)

### Features

- add (un)select all header links ([b82af26](https://github.com/agrc/wfrc-rtp-projects/commit/b82af26b319c96488c77326260a8693f6c23014a)), closes [#26](https://github.com/agrc/wfrc-rtp-projects/issues/26)
- add link to wfrc favicon ([8b4e051](https://github.com/agrc/wfrc-rtp-projects/commit/8b4e051da7f06ffb0950ff68b045c72733dde9d3)), closes [#29](https://github.com/agrc/wfrc-rtp-projects/issues/29)
- auto-cancel builds ([6085cf3](https://github.com/agrc/wfrc-rtp-projects/commit/6085cf38cb6c66278666c67c10795133e632f370))
- implement cost filters ([e123e04](https://github.com/agrc/wfrc-rtp-projects/commit/e123e0460387db045d808baf219193c500962593)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- implement info popup ([e9ac26a](https://github.com/agrc/wfrc-rtp-projects/commit/e9ac26ae3aa2fd80e6362d431d6a871d85b202da)), closes [#7](https://github.com/agrc/wfrc-rtp-projects/issues/7) [#9](https://github.com/agrc/wfrc-rtp-projects/issues/9)
- implement phase year filters in advanced ([b140956](https://github.com/agrc/wfrc-rtp-projects/commit/b14095633cf2a6916758c36ccfa03f30da1cd660)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- implement project type header in phase tab ([9d51933](https://github.com/agrc/wfrc-rtp-projects/commit/9d51933a2ab387f55c4457f7ae994b4f4852fc60)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- implement reset filter button ([e52b0c3](https://github.com/agrc/wfrc-rtp-projects/commit/e52b0c302361b5bdd12d7339286e6dfc1a81b4c8)), closes [#12](https://github.com/agrc/wfrc-rtp-projects/issues/12)
- implement use phasing radio buttons ([abd980f](https://github.com/agrc/wfrc-rtp-projects/commit/abd980fe6e7b0aae4542b58ae8fe5ef186cf07b0)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6) [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)
- initial filter by project type implementation ([f5007cd](https://github.com/agrc/wfrc-rtp-projects/commit/f5007cdf7eb9fd59d9afc88e73424477f002a004)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- sync advanced toggle state between tabs ([a567678](https://github.com/agrc/wfrc-rtp-projects/commit/a567678bd65a962d6b4dcf88ca397279c098f5ee)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- sync project types between mode/phase tabs ([01fe1f3](https://github.com/agrc/wfrc-rtp-projects/commit/01fe1f3ca21f46467a65e62f06ce7cb5ce7d91f6)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)

### Bug Fixes

- balance geometry type labels with others ([3c9c8d4](https://github.com/agrc/wfrc-rtp-projects/commit/3c9c8d42e36bfc8b058008b026cdb42dc7a6d13e))
- **build:** jest tests on ci ([f99196d](https://github.com/agrc/wfrc-rtp-projects/commit/f99196da2fea36725c9ffc14789618b1adccf195))
- **build:** linting ([7b2e7a2](https://github.com/agrc/wfrc-rtp-projects/commit/7b2e7a2197371747bab94b4cc2d287d51c8b8650))
- **build:** remove autoprefixer warning that is failing build in ci ([355e082](https://github.com/agrc/wfrc-rtp-projects/commit/355e0827ac58647b500c6fdb6ef502232bad2565))
- fix active/focus outline overlap ([42eccc9](https://github.com/agrc/wfrc-rtp-projects/commit/42eccc9167c74c0f6edfdab4756380793b4b7a9f))
- formatting ([5a308b2](https://github.com/agrc/wfrc-rtp-projects/commit/5a308b292602500e2a065c177f326fb334823536))
- ftp -> rtp typo ([2f54527](https://github.com/agrc/wfrc-rtp-projects/commit/2f545271d757eb13e46e4888ccd7a36b3c193eec))
- give the labels a little more breathing room ([164c1ed](https://github.com/agrc/wfrc-rtp-projects/commit/164c1ed853e2bad0fa8f46d3f408f062b2f8ff32))
- handle vertical scrolling issue ([0a8fb07](https://github.com/agrc/wfrc-rtp-projects/commit/0a8fb07789cb76634cb8acd7f00892b55d1a2131)), closes [#28](https://github.com/agrc/wfrc-rtp-projects/issues/28)
- hide advanced filter on load ([881d6f1](https://github.com/agrc/wfrc-rtp-projects/commit/881d6f1c727feaef667560fe470198cce61c33af))
- make heading stand out more visually ([4f3b7f3](https://github.com/agrc/wfrc-rtp-projects/commit/4f3b7f35a6031ba8efd2a1440c9cf97be14825c7))
- match labels colors to legend swatches ([86188ef](https://github.com/agrc/wfrc-rtp-projects/commit/86188eff2b728139882bbf75aa0a167d51688e06)), closes [#16](https://github.com/agrc/wfrc-rtp-projects/issues/16)
- switch active/inactive tab colors ([4ae9737](https://github.com/agrc/wfrc-rtp-projects/commit/4ae97378baa982e187f53b75c3b94a602961bcdc)), closes [#30](https://github.com/agrc/wfrc-rtp-projects/issues/30)
- update layer defs on use phasing change ([d8b4294](https://github.com/agrc/wfrc-rtp-projects/commit/d8b429406059e7ba4b417d750861de202c3c989f)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)

### [0.2.2](https://github.com/agrc/wfrc-rtp-projects/compare/v0.2.1...v0.2.2) (2022-06-15)

### Features

- auto-cancel builds ([e771959](https://github.com/agrc/wfrc-rtp-projects/commit/e771959c3fcf4f86632d739ecf408aedc1e68bbc))

### Bug Fixes

- hide advanced filter on load ([c3adaee](https://github.com/agrc/wfrc-rtp-projects/commit/c3adaee52da4ddaf6a5272633bb58ef950bb869f))

### [0.2.1](https://github.com/agrc/wfrc-rtp-projects/compare/v0.2.0...v0.2.1) (2022-06-15)

### Bug Fixes

- **build:** remove autoprefixer warning that is failing build in ci ([577b77c](https://github.com/agrc/wfrc-rtp-projects/commit/577b77ccb547263449b17b63c9e6cc3d1e0c1461))

## [0.2.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.5...v0.2.0) (2022-06-15)

### Features

- implement cost filters ([4a02f23](https://github.com/agrc/wfrc-rtp-projects/commit/4a02f2352273b7af388a0e79a1c588f687604ad0)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- implement phase year filters in advanced ([5fdc43b](https://github.com/agrc/wfrc-rtp-projects/commit/5fdc43bd02da8d81f535503c38650bbb9326efec)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- implement project type header in phase tab ([999fd2e](https://github.com/agrc/wfrc-rtp-projects/commit/999fd2e51774e061f3c59a18ccedb9f90d3dbdde)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- implement use phasing radio buttons ([8e85933](https://github.com/agrc/wfrc-rtp-projects/commit/8e8593389d260fd5dc6c61bca8687e19e3b21daf)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6) [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)
- initial filter by project type implementation ([640a0ab](https://github.com/agrc/wfrc-rtp-projects/commit/640a0ab89cf04f0bea06481e5a40272f02f8770f)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- sync advanced toggle state between tabs ([3331a7e](https://github.com/agrc/wfrc-rtp-projects/commit/3331a7e8f3263a24c24f7def96e4ea3fb8c6859a)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
- sync project types between mode/phase tabs ([9e26709](https://github.com/agrc/wfrc-rtp-projects/commit/9e2670977ccd29d7b9acaab9362bd8202b5961dc)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)

### Bug Fixes

- balance geometry type labels with others ([5c58656](https://github.com/agrc/wfrc-rtp-projects/commit/5c58656a6521b31823e955ec7141b9a21d141ef8))
- give the labels a little more breathing room ([83657a8](https://github.com/agrc/wfrc-rtp-projects/commit/83657a8ebba09bb33221f8b7673ac5fc656fdf55))
- make heading stand out more visually ([30625a5](https://github.com/agrc/wfrc-rtp-projects/commit/30625a5e48f90234aa6c30b734a57d811791ca67))
- match labels colors to legend swatches ([1133635](https://github.com/agrc/wfrc-rtp-projects/commit/1133635c31c7ff7ebe90cc46ed77a283116960e3)), closes [#16](https://github.com/agrc/wfrc-rtp-projects/issues/16)
- update layer defs on use phasing change ([75e882e](https://github.com/agrc/wfrc-rtp-projects/commit/75e882e60eb957a2a39d9276e37c46a157f33288)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)

### [0.1.5](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.4...v0.1.5) (2022-04-26)

### Bug Fixes

- add config to support non-root level deployment ([9765f7b](https://github.com/agrc/wfrc-rtp-projects/commit/9765f7b4f25302a023ceb42099343d48b759d2b3))

### [0.1.4](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.3...v0.1.4) (2022-04-22)

### Features

- add error boundary to filter ([e25addd](https://github.com/agrc/wfrc-rtp-projects/commit/e25addd4935313e1b6bf609b9612423c84782c57))
- begin to flesh out simple filter layout and framework ([1b1bd0f](https://github.com/agrc/wfrc-rtp-projects/commit/1b1bd0f5c5a47d3524fa9f315e28010c7de29b8b)), closes [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)
- show symbols from feature layers ([45980a7](https://github.com/agrc/wfrc-rtp-projects/commit/45980a7ca7b69e3a64afdb2a69d11e89f9385d41)), closes [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)
- **tooling:** add react eslint configs ([2d2d9c6](https://github.com/agrc/wfrc-rtp-projects/commit/2d2d9c6ad5dac522f29b7c4f48683b3b852c561b))
- wire up simple filter checkboxes ([5e351e2](https://github.com/agrc/wfrc-rtp-projects/commit/5e351e26e34c106390b4d482655cc48eacb4588b)), closes [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)

### Bug Fixes

- fix filter toggle ([df4c43c](https://github.com/agrc/wfrc-rtp-projects/commit/df4c43c73d6a96d43b9ae6ae01a5a7a40f5c08bc))
- increase symbol size ([9d5caf7](https://github.com/agrc/wfrc-rtp-projects/commit/9d5caf782a3baf090e2ad4e9c38cd1550f127fba))

### [0.1.3](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.2...v0.1.3) (2022-04-21)

### Bug Fixes

- **tooling:** release body param ([12444ae](https://github.com/agrc/wfrc-rtp-projects/commit/12444ae69cd3d4ac94f787ac417bba12caeca69f))

### [0.1.2](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.1...v0.1.2) (2022-04-21)

### Bug Fixes

- **tooling:** remove working dir ([87dc208](https://github.com/agrc/wfrc-rtp-projects/commit/87dc208ae444238f8e725d154814f6a38c618e71))

### [0.1.1](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.0...v0.1.1) (2022-04-21)

### Features

- **tooling:** implement github action for releases ([4929703](https://github.com/agrc/wfrc-rtp-projects/commit/4929703019c5d27913eebdefc7df62c723ca297f)), closes [#1](https://github.com/agrc/wfrc-rtp-projects/issues/1)

## 0.1.0 (2022-04-21)

### Features

- add home button ([d73b240](https://github.com/agrc/wfrc-rtp-projects/commit/d73b2402a20d158af0547a5e0c86b235b02bcddd)), closes [#3](https://github.com/agrc/wfrc-rtp-projects/issues/3)
- add sherlock ([51da6e6](https://github.com/agrc/wfrc-rtp-projects/commit/51da6e67ea4433cfe58b79f077cb8d5f09101a86))
- flesh out basic layout ([5d9233f](https://github.com/agrc/wfrc-rtp-projects/commit/5d9233fcdd30806835e55cd0c59d09616a3d6ca1)), closes [#3](https://github.com/agrc/wfrc-rtp-projects/issues/3)
- **tooling:** add eslint npm command ([4f9279e](https://github.com/agrc/wfrc-rtp-projects/commit/4f9279edd131ba8b7fbc94e08b4f290c77ec4e97)), closes [#2](https://github.com/agrc/wfrc-rtp-projects/issues/2)
- **tooling:** bootstrap and sass ([f2ddeaf](https://github.com/agrc/wfrc-rtp-projects/commit/f2ddeafb770ba76beb0cb10f818d0e3600254a35)), closes [#3](https://github.com/agrc/wfrc-rtp-projects/issues/3)
- **tooling:** implement bootstrap ([061a163](https://github.com/agrc/wfrc-rtp-projects/commit/061a163bc29fe17e4f9ee0eeeffff74ca7ceb297))
- **tooling:** implement prettier ([4391097](https://github.com/agrc/wfrc-rtp-projects/commit/4391097805488e88046568638223925399d553b0)), closes [#2](https://github.com/agrc/wfrc-rtp-projects/issues/2)
- **tooling:** implement standard version release ([229ef1f](https://github.com/agrc/wfrc-rtp-projects/commit/229ef1f8c96c96f2ceb6f20ea6c8be1ccfd0fb29)), closes [#1](https://github.com/agrc/wfrc-rtp-projects/issues/1)

### Bug Fixes

- sanity test ([21a8429](https://github.com/agrc/wfrc-rtp-projects/commit/21a8429b0f4451aa583d2c4348d31e80590f3f57))
