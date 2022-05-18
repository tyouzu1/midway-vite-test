const react = require('@vitejs/plugin-react');

/**
 * @type {import('vite').UserConfig}
 */
export default {
  root: process.cwd() + '/view',
  plugins: [react()],
  build: {
    minify: false,
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // color
          '@primary-color': '#356DFF',
          '@success-color': '#35C08E',
          '@warning-color': '#FE9E0F',
          '@error-color': '#F86140',
          '@disabled-color': '#B8BECC',
          '@disabled-bg': '#EAEDF1',
          '@white': '#fff',
          // border
          '@border-color-base': '#D7DBE7',
          '@border-radius-base': '4px',
          // divider
          '@divider-color': '#EEF1F6',
          '@layout-body-background': '#EAEDF1',
          // Menu
          '@menu-item-height': '48px',
          '@menu-item-color': '#242833',
          // Header
          '@heading-color': '#242833',
          // Text
          '@text-color': '#474F5E',
          '@text-color-secondary': '#7A8499',
          // Common
          '@title-color': '#242833',
          '@font-size-base': '14px',
          '@h1-font-size': '30px',
          '@h2-font-size': '20px',
          '@h3-font-size': '16px',
          '@h4-font-size': '14px',
          '@primary-font-size': '14px',
          '@secondary-font-size': '12px',
          '@font-family':
            'SF Pro SC, SF Pro Display, SF Pro Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif, Microsoft YaHei',
          '@background-color-light': '#F0F7FF',
          '@item-hover-bg': '#F7F8FB',
          // Pagination
          '@pagination-item-bg-active': '#F0F7FF',
          // Tabs
          // 选中 tab 的字体色
          // '@tabs-active-color': '#242833',
          // '@tabs-hover-color': '#242833',
          // '@tabs-highlight-color': '#242833',
          // Input
          '@input-placeholder-color': '#B8BECC',
          '@input-color': '#474F5E',
          '@input-icon-color': '#474F5E',
          '@input-hover-border-color': '#356DFF',
          '@outline-color': '#356DFF',
          '@outline-fade': '0',
          // Tooltip
          '@tooltip-bg': 'rgba(36, 40, 51, 0.9)',
          // Checkbox
          '@checkbox-check-bg': '#fff',
          // Alert
          '@alert-info-border-color': '#356DFF33',
          '@alert-info-bg-color': '#E2F0FF',
          '@alert-success-border-color': '#35C08E33',
          '@alert-success-bg-color': '#D6FAE7',
          '@alert-success-icon-color': '#35C08E',
          '@alert-warning-border-color': '#D98F4A33',
          '@alert-warning-bg-color': '#FFF2E6',
          '@alert-warning-icon-color': '#FE9E0F',
          '@alert-error-border-color': '#F8614033',
          '@alert-error-bg-color': '#FFEBE7',
          '@alert-error-icon-color': '#F86140',
          '@alert-message-color': '#242833',
          '@alert-text-color': 'rgba(0, 0, 0, 0.65)',
          // Button
          '@btn-default-color': '#474F5E',
          '@btn-default-border': '#D7DBE7',
          '@btn-border-radius-base': '4px',
          // Modal
          '@modal-footer-padding-horizontal': '24px',
          '@modal-header-padding': '16px 24px',
          '@modal-footer-padding-vertical': '12px',
          // Table
          '@table-padding-vertical': '12px',
          '@table-padding-horizontal': '12px',
          '@table-header-bg': '#F5F8FC',
          // Select
          '@select-selection-item-bg': '#EAEDF1',
        },
      },
    },
  },
};
