# Admin App Test Data

This directory contains resources for development of the admin UI.
It includes mock data used by `installTestApi` in `libs/ui` to
patch the custom `HttpResourceApi` so calls to `/users` return
predefined data. Import and invoke `installTestApi()` during
testing or local development before any HTTP requests are made.
