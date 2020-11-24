export class CoreConstants {
  // default headers set for Http Calls
  public static readonly HTTP_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  public static readonly HOME_PAGE_TITLE = 'Home';
  public static readonly PARALLEL_PAGE_TITLE = 'Parallel';
  public static readonly SEARCH_PAGE_TITLE = 'Search';
  public static readonly SEQUENTIAL_PAGE_TITLE = 'Sequential';
  public static readonly APP_TITLE = 'ngx-interceptors-demo';

  public static readonly ALERT_DURATION = 2000;

  // Retry configs
  public static readonly DEFAULT_MAX_RETRY = 3;
  public static readonly DEFAULT_BACKOFF = 500;
  public static readonly DEFAULT_DELAY = 500;

}
