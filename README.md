<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Discourse Topics][discourse-shield]][discourse-url]
![Times Downloaded][downloads-shield]
![Issues][issues-shield]
![Latest Releases][release-shield]
![Contributor Shield][contributor-shield]


<!-- [discourse-shield]: https://img.shields.io/discourse/topics?label=Discuss%20This%20Tool&server=https%3A%2F%2Fdeveloper.sailpoint.com%2Fdiscuss -->
[discourse-shield]: https://img.shields.io/badge/Discuss_This_Tool-0033a1
[discourse-url]: https://developer.sailpoint.com/discuss/tag/idn-admin-console
[downloads-shield]: https://img.shields.io/github/downloads/sailpoint-oss/idn-admin-console/total?label=Downloads
[issues-shield]:https://img.shields.io/github/issues/sailpoint-oss/idn-admin-console?label=Issues
[release-shield]: https://img.shields.io/github/v/tag/sailpoint-oss/idn-admin-console?label=Current%20Release
[contributor-shield]:https://img.shields.io/github/contributors/sailpoint-oss/idn-admin-console?label=Contributors

[product-screenshot]: ./assets/images/idn-admin-console-output.png

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://avatars.githubusercontent.com/u/63106368?s=200&v=4" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">IdentityNow Admin Console - README</h3>

  <p align="center">
    A desktop application to administer and troubleshoot IdentityNow
    <br />
    <a href="https://github.com/sailpoint-oss/idn-admin-console/issues/new?assignees=&labels=bug&projects=&template=bug-report.md&title=%5BBUG%5D+Your+Bug+Report+Here">Report Bug</a>
    ·
    <a href="https://github.com/sailpoint-oss/idn-admin-console/issues/new?assignees=&labels=enhancement&projects=&template=feature-request.md&title=%5BFEATURE%5D+Your+Feature+Request+Here+">Request Feature</a>
  </p>
</div>

- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Using a release](#using-a-release)
  - [Building the Application from Source](#building-the-application-from-source)
- [Contributing](#contributing)
- [License](#license)
- [Discuss](#discuss)


<!-- ABOUT THE PROJECT -->
## About The Project

<!-- <div align="center">
<img src="./assets/images/idn-admin-console-output.png" width="500" height="" style="text-align:center">
</div> -->

The IdentityNow Admin Console is a tool developed and maintained by the SailPoint Developer Relations team. It is a desktop application that allows you to administer and troubleshoot IdentityNow. It is built using Electron and Sveltekit. 

The goal of this tool is to provide a single place to perform common administrative tasks and to troubleshoot issues in your IdentityNow tenant.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To use this tool, you will need to have an IdentityNow tenant. 

### Using a release

Built versions of this application should be available for each major OS platform. You can find the latest release [here](https://github.com/sailpoint-oss/idn-admin-console/releases/latest). 

Simply pick your OS and download the relevant file from the latest release:
| Platform | File Type |
| -------- | --------- |
| Windows  | exe, zip  |
| Mac      | dmg, zip  |
| Linux    | deb, rpm, zip |

If you would like to build the application yourself, you can do so by following these steps:

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Building the Application from Source

Prerequisites:
* To build the application from source you will need NPM installed. You can find instructions on how to install NPM [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Once you have NPM installed, you can clone this repository and run the following commands in the specified order and folders:

In the folder: `./Sveltekit-App`
First run
```bash
npm install
```

Then run
```bash
npm run build
```

Next in the folder: `./Electron-App`
First run
```bash
npm install
```

Then run
```bash
npm run build
```

Assuming no errors occurred during the build process, the built application binaries should then be located in the `./Electron-App/out` folder.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag `enhancement`.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Discuss
[Click Here](https://developer.sailpoint.com/dicuss/tag/idn-admin-console) to discuss this tool with other users.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
