import 'wind-ui-pro/lib/theme/index.css'

export default async ({ Vue, options, router, siteData, isServer }) => {
    if (!isServer) {
        await import('wind-ui-pro').then(windUi => {
            Vue.use(windUi);
        });
    }
};
  