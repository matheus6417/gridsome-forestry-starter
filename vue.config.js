
const PREVIEW_TOKEN = 'Wc9K60fbzMpYROvxdwZ7lAtt';
const PUBLIC_TOKEN = 'DRsWf2NvIN7OvfGy1jXYjgtt';

process.env.VUE_APP_ACCESS_TOKEN = process.env.STORYBLOK_BRIDGE ? PREVIEW_TOKEN : PUBLIC_TOKEN;
process.env.VUE_APP_STORYBLOK_BRIDGE = process.env.STORYBLOK_BRIDGE;

module.exports = {
    runtimeCompiler: true
}
