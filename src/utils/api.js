import StoryblokClient from 'storyblok-js-client';

const api = new StoryblokClient({
  accessToken: 'Wc9K60fbzMpYROvxdwZ7lAtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});
if (process.env.VUE_APP_STORYBLOK_BRIDGE === 'true') {
  api.get = function get(slug, params) {
    console.log(StoryblokClient.prototype.get.call(this, slug, { ...params, version: 'draft' }));
    return StoryblokClient.prototype.get.call(this, slug, { ...params, version: 'draft' });
  };
}

export default api;