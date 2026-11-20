/* Hushi AI website: page-view counts with PostHog (US cloud), no cookies. Cookieless mode keeps nothing on the visitor's device;
   PostHog tells visitors apart with a one-way hash it makes on its servers. No tap capture, no screen recording, no surveys,
   no profiles. Honours Do Not Track. The key below is PostHog's public project token (it is meant to be in the page). */
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = 'https://us-assets.i.posthog.com/static/array.js';
  s.onload = function () {
    if (!window.posthog || !window.posthog.init) return;
    window.posthog.init('phc_mWeS2vP3fo28nGD595Nnhu4oKhcwHgec8As2nyDjQnyp', {
      api_host: 'https://us.i.posthog.com',
      defaults: '2025-05-24',
      cookieless_mode: 'always',
      person_profiles: 'identified_only',
      autocapture: false,
      disable_session_recording: true,
      disable_surveys: true,
      respect_dnt: true,
    });
  };
  document.head.appendChild(s);
})();
