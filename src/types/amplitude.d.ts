import 'amplitude-js';

declare module 'amplitude-js' {
  interface Config {
    defaultTracking?:
      | boolean
      | {
          pageViews?: boolean;
          sessions?: boolean;
          fileDownloads?: boolean;
          formInteractions?: boolean;
        };
  }
}
