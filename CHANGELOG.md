# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.6.0...v1.0.0) (2022-07-13)


### Features

* add config docs ([ff39312](https://github.com/agrc/wfrc-rtp-projects/commit/ff3931285a2ac8be9c71169dd0dde7e76be20a10)), closes [#42](https://github.com/agrc/wfrc-rtp-projects/issues/42)
* add final configurable options ([a74a3ef](https://github.com/agrc/wfrc-rtp-projects/commit/a74a3ef6fa7bc18b08e1b6da92f772f851295fcf)), closes [#9](https://github.com/agrc/wfrc-rtp-projects/issues/9)

## [0.6.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.5.0...v0.6.0) (2022-07-13)


### Features

* auto-open project info on map feature click ([8fcf25a](https://github.com/agrc/wfrc-rtp-projects/commit/8fcf25a73ae389b7f34660e728ad3d2007fcf67f))


### Bug Fixes

* make udot facilities checkbox look visually distinct from others ([a48c148](https://github.com/agrc/wfrc-rtp-projects/commit/a48c1484818c30dc86aa499f82a215c3a122c39b))
* make udot ownership and other checkboxes apply only to the project type that they are contained in ([1207e62](https://github.com/agrc/wfrc-rtp-projects/commit/1207e62a47fe6e4cb07263260337cb9db622b99e))
* select/unselect all should ignore udot ownership checkboxes ([7b0e21e](https://github.com/agrc/wfrc-rtp-projects/commit/7b0e21ee8675f991f8d8a13b9002fdea5941ab77))
* turning off all primary checkboxes hides all features ([61d2246](https://github.com/agrc/wfrc-rtp-projects/commit/61d22469bdf719cf6287ddc1b1a5394a07c0e303))
* unselecting all should remove all features for that project type ([6ef6a65](https://github.com/agrc/wfrc-rtp-projects/commit/6ef6a6524e5dc1cfa1c64363392ad1eaff1840c9))

## [0.5.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.4.0...v0.5.0) (2022-07-12)


### ⚠ BREAKING CHANGES

* The `infoText` and `projectTypes` configs have been nested under `filter`.

### Features

* add `disableAdvanced` filter config ([e40a28f](https://github.com/agrc/wfrc-rtp-projects/commit/e40a28f649bba4a74896057e906019f56ba1a0bb))
* make application title configurable ([3160c6b](https://github.com/agrc/wfrc-rtp-projects/commit/3160c6b8ce218e87d40b72afeb04ce0eff4ef1c2))


### Bug Fixes

* fix reset button regression ([b881b7c](https://github.com/agrc/wfrc-rtp-projects/commit/b881b7c4b4a8873ebd96d7e2fc69d346a9fed9e8))
* remove "in millions" text from cost filter ([ea31ee0](https://github.com/agrc/wfrc-rtp-projects/commit/ea31ee0320e9122d31c7aef581bdf80156624b51))

## [0.4.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.3.0...v0.4.0) (2022-07-11)


### Features

* port comments widget from old wab app ([e02835d](https://github.com/agrc/wfrc-rtp-projects/commit/e02835d6c8f3a23f2f8de5e93de7c0d4053d1e31)), closes [#19](https://github.com/agrc/wfrc-rtp-projects/issues/19) [#9](https://github.com/agrc/wfrc-rtp-projects/issues/9)
* port Project Information widget from wasatch choice map ([66b704c](https://github.com/agrc/wfrc-rtp-projects/commit/66b704cd3f34efde0ef73c62d6d5d2a0b9789210)), closes [#19](https://github.com/agrc/wfrc-rtp-projects/issues/19)
* pretty print sql in console logs ([1fd61a5](https://github.com/agrc/wfrc-rtp-projects/commit/1fd61a5d8b0d3f56b90fb2e64247d6d2abeb718b)), closes [#31](https://github.com/agrc/wfrc-rtp-projects/issues/31)


### Bug Fixes

* add spinners back to bootstrap ([09d1346](https://github.com/agrc/wfrc-rtp-projects/commit/09d134684c4ea03a55bd67cce03a3af98b3ee0bd))
* simplify ownership filter ([9d96c20](https://github.com/agrc/wfrc-rtp-projects/commit/9d96c20b48fc0478ff488a2dc36f9828b4c3e34e)), closes [#33](https://github.com/agrc/wfrc-rtp-projects/issues/33) [#8](https://github.com/agrc/wfrc-rtp-projects/issues/8)
* UX improvements for cost filter ([733b90b](https://github.com/agrc/wfrc-rtp-projects/commit/733b90b971e84b883a9dfcfda300b2b8e7e9071c)), closes [#32](https://github.com/agrc/wfrc-rtp-projects/issues/32)

## [0.3.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.5...v0.3.0) (2022-06-21)


### Features

* add (un)select all header links ([b82af26](https://github.com/agrc/wfrc-rtp-projects/commit/b82af26b319c96488c77326260a8693f6c23014a)), closes [#26](https://github.com/agrc/wfrc-rtp-projects/issues/26)
* add link to wfrc favicon ([8b4e051](https://github.com/agrc/wfrc-rtp-projects/commit/8b4e051da7f06ffb0950ff68b045c72733dde9d3)), closes [#29](https://github.com/agrc/wfrc-rtp-projects/issues/29)
* auto-cancel builds ([6085cf3](https://github.com/agrc/wfrc-rtp-projects/commit/6085cf38cb6c66278666c67c10795133e632f370))
* implement cost filters ([e123e04](https://github.com/agrc/wfrc-rtp-projects/commit/e123e0460387db045d808baf219193c500962593)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* implement info popup ([e9ac26a](https://github.com/agrc/wfrc-rtp-projects/commit/e9ac26ae3aa2fd80e6362d431d6a871d85b202da)), closes [#7](https://github.com/agrc/wfrc-rtp-projects/issues/7) [#9](https://github.com/agrc/wfrc-rtp-projects/issues/9)
* implement phase year filters in advanced ([b140956](https://github.com/agrc/wfrc-rtp-projects/commit/b14095633cf2a6916758c36ccfa03f30da1cd660)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* implement project type header in phase tab ([9d51933](https://github.com/agrc/wfrc-rtp-projects/commit/9d51933a2ab387f55c4457f7ae994b4f4852fc60)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* implement reset filter button ([e52b0c3](https://github.com/agrc/wfrc-rtp-projects/commit/e52b0c302361b5bdd12d7339286e6dfc1a81b4c8)), closes [#12](https://github.com/agrc/wfrc-rtp-projects/issues/12)
* implement use phasing radio buttons ([abd980f](https://github.com/agrc/wfrc-rtp-projects/commit/abd980fe6e7b0aae4542b58ae8fe5ef186cf07b0)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6) [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)
* initial filter by project type implementation ([f5007cd](https://github.com/agrc/wfrc-rtp-projects/commit/f5007cdf7eb9fd59d9afc88e73424477f002a004)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* sync advanced toggle state between tabs ([a567678](https://github.com/agrc/wfrc-rtp-projects/commit/a567678bd65a962d6b4dcf88ca397279c098f5ee)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* sync project types between mode/phase tabs ([01fe1f3](https://github.com/agrc/wfrc-rtp-projects/commit/01fe1f3ca21f46467a65e62f06ce7cb5ce7d91f6)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)


### Bug Fixes

* balance geometry type labels with others ([3c9c8d4](https://github.com/agrc/wfrc-rtp-projects/commit/3c9c8d42e36bfc8b058008b026cdb42dc7a6d13e))
* **build:** jest tests on ci ([f99196d](https://github.com/agrc/wfrc-rtp-projects/commit/f99196da2fea36725c9ffc14789618b1adccf195))
* **build:** linting ([7b2e7a2](https://github.com/agrc/wfrc-rtp-projects/commit/7b2e7a2197371747bab94b4cc2d287d51c8b8650))
* **build:** remove autoprefixer warning that is failing build in ci ([355e082](https://github.com/agrc/wfrc-rtp-projects/commit/355e0827ac58647b500c6fdb6ef502232bad2565))
* fix active/focus outline overlap ([42eccc9](https://github.com/agrc/wfrc-rtp-projects/commit/42eccc9167c74c0f6edfdab4756380793b4b7a9f))
* formatting ([5a308b2](https://github.com/agrc/wfrc-rtp-projects/commit/5a308b292602500e2a065c177f326fb334823536))
* ftp -> rtp typo ([2f54527](https://github.com/agrc/wfrc-rtp-projects/commit/2f545271d757eb13e46e4888ccd7a36b3c193eec))
* give the labels a little more breathing room ([164c1ed](https://github.com/agrc/wfrc-rtp-projects/commit/164c1ed853e2bad0fa8f46d3f408f062b2f8ff32))
* handle vertical scrolling issue ([0a8fb07](https://github.com/agrc/wfrc-rtp-projects/commit/0a8fb07789cb76634cb8acd7f00892b55d1a2131)), closes [#28](https://github.com/agrc/wfrc-rtp-projects/issues/28)
* hide advanced filter on load ([881d6f1](https://github.com/agrc/wfrc-rtp-projects/commit/881d6f1c727feaef667560fe470198cce61c33af))
* make heading stand out more visually ([4f3b7f3](https://github.com/agrc/wfrc-rtp-projects/commit/4f3b7f35a6031ba8efd2a1440c9cf97be14825c7))
* match labels colors to legend swatches ([86188ef](https://github.com/agrc/wfrc-rtp-projects/commit/86188eff2b728139882bbf75aa0a167d51688e06)), closes [#16](https://github.com/agrc/wfrc-rtp-projects/issues/16)
* switch active/inactive tab colors ([4ae9737](https://github.com/agrc/wfrc-rtp-projects/commit/4ae97378baa982e187f53b75c3b94a602961bcdc)), closes [#30](https://github.com/agrc/wfrc-rtp-projects/issues/30)
* update layer defs on use phasing change ([d8b4294](https://github.com/agrc/wfrc-rtp-projects/commit/d8b429406059e7ba4b417d750861de202c3c989f)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)

### [0.2.2](https://github.com/agrc/wfrc-rtp-projects/compare/v0.2.1...v0.2.2) (2022-06-15)


### Features

* auto-cancel builds ([e771959](https://github.com/agrc/wfrc-rtp-projects/commit/e771959c3fcf4f86632d739ecf408aedc1e68bbc))


### Bug Fixes

* hide advanced filter on load ([c3adaee](https://github.com/agrc/wfrc-rtp-projects/commit/c3adaee52da4ddaf6a5272633bb58ef950bb869f))

### [0.2.1](https://github.com/agrc/wfrc-rtp-projects/compare/v0.2.0...v0.2.1) (2022-06-15)


### Bug Fixes

* **build:** remove autoprefixer warning that is failing build in ci ([577b77c](https://github.com/agrc/wfrc-rtp-projects/commit/577b77ccb547263449b17b63c9e6cc3d1e0c1461))

## [0.2.0](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.5...v0.2.0) (2022-06-15)


### Features

* implement cost filters ([4a02f23](https://github.com/agrc/wfrc-rtp-projects/commit/4a02f2352273b7af388a0e79a1c588f687604ad0)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* implement phase year filters in advanced ([5fdc43b](https://github.com/agrc/wfrc-rtp-projects/commit/5fdc43bd02da8d81f535503c38650bbb9326efec)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* implement project type header in phase tab ([999fd2e](https://github.com/agrc/wfrc-rtp-projects/commit/999fd2e51774e061f3c59a18ccedb9f90d3dbdde)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* implement use phasing radio buttons ([8e85933](https://github.com/agrc/wfrc-rtp-projects/commit/8e8593389d260fd5dc6c61bca8687e19e3b21daf)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6) [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)
* initial filter by project type implementation ([640a0ab](https://github.com/agrc/wfrc-rtp-projects/commit/640a0ab89cf04f0bea06481e5a40272f02f8770f)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* sync advanced toggle state between tabs ([3331a7e](https://github.com/agrc/wfrc-rtp-projects/commit/3331a7e8f3263a24c24f7def96e4ea3fb8c6859a)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)
* sync project types between mode/phase tabs ([9e26709](https://github.com/agrc/wfrc-rtp-projects/commit/9e2670977ccd29d7b9acaab9362bd8202b5961dc)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)


### Bug Fixes

* balance geometry type labels with others ([5c58656](https://github.com/agrc/wfrc-rtp-projects/commit/5c58656a6521b31823e955ec7141b9a21d141ef8))
* give the labels a little more breathing room ([83657a8](https://github.com/agrc/wfrc-rtp-projects/commit/83657a8ebba09bb33221f8b7673ac5fc656fdf55))
* make heading stand out more visually ([30625a5](https://github.com/agrc/wfrc-rtp-projects/commit/30625a5e48f90234aa6c30b734a57d811791ca67))
* match labels colors to legend swatches ([1133635](https://github.com/agrc/wfrc-rtp-projects/commit/1133635c31c7ff7ebe90cc46ed77a283116960e3)), closes [#16](https://github.com/agrc/wfrc-rtp-projects/issues/16)
* update layer defs on use phasing change ([75e882e](https://github.com/agrc/wfrc-rtp-projects/commit/75e882e60eb957a2a39d9276e37c46a157f33288)), closes [#6](https://github.com/agrc/wfrc-rtp-projects/issues/6)

### [0.1.5](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.4...v0.1.5) (2022-04-26)


### Bug Fixes

* add config to support non-root level deployment ([9765f7b](https://github.com/agrc/wfrc-rtp-projects/commit/9765f7b4f25302a023ceb42099343d48b759d2b3))

### [0.1.4](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.3...v0.1.4) (2022-04-22)


### Features

* add error boundary to filter ([e25addd](https://github.com/agrc/wfrc-rtp-projects/commit/e25addd4935313e1b6bf609b9612423c84782c57))
* begin to flesh out simple filter layout and framework ([1b1bd0f](https://github.com/agrc/wfrc-rtp-projects/commit/1b1bd0f5c5a47d3524fa9f315e28010c7de29b8b)), closes [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)
* show symbols from feature layers ([45980a7](https://github.com/agrc/wfrc-rtp-projects/commit/45980a7ca7b69e3a64afdb2a69d11e89f9385d41)), closes [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)
* **tooling:** add react eslint configs ([2d2d9c6](https://github.com/agrc/wfrc-rtp-projects/commit/2d2d9c6ad5dac522f29b7c4f48683b3b852c561b))
* wire up simple filter checkboxes ([5e351e2](https://github.com/agrc/wfrc-rtp-projects/commit/5e351e26e34c106390b4d482655cc48eacb4588b)), closes [#5](https://github.com/agrc/wfrc-rtp-projects/issues/5)


### Bug Fixes

* fix filter toggle ([df4c43c](https://github.com/agrc/wfrc-rtp-projects/commit/df4c43c73d6a96d43b9ae6ae01a5a7a40f5c08bc))
* increase symbol size ([9d5caf7](https://github.com/agrc/wfrc-rtp-projects/commit/9d5caf782a3baf090e2ad4e9c38cd1550f127fba))

### [0.1.3](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.2...v0.1.3) (2022-04-21)


### Bug Fixes

* **tooling:** release body param ([12444ae](https://github.com/agrc/wfrc-rtp-projects/commit/12444ae69cd3d4ac94f787ac417bba12caeca69f))

### [0.1.2](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.1...v0.1.2) (2022-04-21)


### Bug Fixes

* **tooling:** remove working dir ([87dc208](https://github.com/agrc/wfrc-rtp-projects/commit/87dc208ae444238f8e725d154814f6a38c618e71))

### [0.1.1](https://github.com/agrc/wfrc-rtp-projects/compare/v0.1.0...v0.1.1) (2022-04-21)


### Features

* **tooling:** implement github action for releases ([4929703](https://github.com/agrc/wfrc-rtp-projects/commit/4929703019c5d27913eebdefc7df62c723ca297f)), closes [#1](https://github.com/agrc/wfrc-rtp-projects/issues/1)

## 0.1.0 (2022-04-21)


### Features

* add home button ([d73b240](https://github.com/agrc/wfrc-rtp-projects/commit/d73b2402a20d158af0547a5e0c86b235b02bcddd)), closes [#3](https://github.com/agrc/wfrc-rtp-projects/issues/3)
* add sherlock ([51da6e6](https://github.com/agrc/wfrc-rtp-projects/commit/51da6e67ea4433cfe58b79f077cb8d5f09101a86))
* flesh out basic layout ([5d9233f](https://github.com/agrc/wfrc-rtp-projects/commit/5d9233fcdd30806835e55cd0c59d09616a3d6ca1)), closes [#3](https://github.com/agrc/wfrc-rtp-projects/issues/3)
* **tooling:** add eslint npm command ([4f9279e](https://github.com/agrc/wfrc-rtp-projects/commit/4f9279edd131ba8b7fbc94e08b4f290c77ec4e97)), closes [#2](https://github.com/agrc/wfrc-rtp-projects/issues/2)
* **tooling:** bootstrap and sass ([f2ddeaf](https://github.com/agrc/wfrc-rtp-projects/commit/f2ddeafb770ba76beb0cb10f818d0e3600254a35)), closes [#3](https://github.com/agrc/wfrc-rtp-projects/issues/3)
* **tooling:** implement bootstrap ([061a163](https://github.com/agrc/wfrc-rtp-projects/commit/061a163bc29fe17e4f9ee0eeeffff74ca7ceb297))
* **tooling:** implement prettier ([4391097](https://github.com/agrc/wfrc-rtp-projects/commit/4391097805488e88046568638223925399d553b0)), closes [#2](https://github.com/agrc/wfrc-rtp-projects/issues/2)
* **tooling:** implement standard version release ([229ef1f](https://github.com/agrc/wfrc-rtp-projects/commit/229ef1f8c96c96f2ceb6f20ea6c8be1ccfd0fb29)), closes [#1](https://github.com/agrc/wfrc-rtp-projects/issues/1)


### Bug Fixes

* sanity test ([21a8429](https://github.com/agrc/wfrc-rtp-projects/commit/21a8429b0f4451aa583d2c4348d31e80590f3f57))
