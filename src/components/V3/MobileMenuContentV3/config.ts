const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const metadataConfig = JSON.parse(process.env.NEXT_PUBLIC_METADATA_CONFIG || '{}');
const appEnvironment = process.env.NEXT_PUBLIC_APP_ENVIRONMENT || 'testnet';
const assets = JSON.parse(
    process.env.NEXT_PUBLIC_ASSETS_APP ||
    JSON.stringify({
        pools: { src: '/images/pools-logo.png', href: 'https://pools.example.com' },
        poolsCP: { src: '/images/pools-cp-logo.png', href: 'https://poolscp.example.com' },
        engage: { src: '/images/engage-logo.png', href: 'https://engage.example.com' }
    })
);
const appVersion = process.env.NEXT_PUBLIC_APP_VERSION?.split('/').pop() || '';

export const generalConfig = {
    appUrl,
    metadataConfig,
    appEnvironment,
    assets,
    appVersion
};
