type BuildInfo =
  import('@travel-packlist/versioning/build-info').BuildInfoSchema;

declare const ANDROID: boolean;
declare const BUILD_TIME: BuildInfo['buildTime'];
declare const VERSION: BuildInfo['version'];
declare const GIT_HASH: BuildInfo['gitHash'];
declare const VERSION_CODE: BuildInfo['versionCode'];

declare module '*.txt' {
  const value: string;
  export default value;
}
