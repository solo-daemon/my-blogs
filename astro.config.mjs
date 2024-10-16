import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://louisescher.github.io',
  base: '/my-blogs',
  integrations: [starlight({
    title: 'amr1t',
    logo: {
      src: './src/assets/college-boy-logo.png'
    },
    social: {
      github: 'https://github.com/solo-daemon/my-blogs',
      linkedin: 'https://www.linkedin.com/in/amrit-prakash-b544ab222/',
      twitter: 'https://x.com/amr1t_prakash',
      discord: 'https://discord.gg/m0b1us'
    },
    sidebar: [{
      label: '[home] Home',
      link: '/'
    }, 
    // {
    //   label: '[list] Features',
    //   link: '/features/'
    // },
     {
      label: '[book] Blogs',
      autogenerate: {
        directory: 'blogs'
      }
    }, {
      label: '[rocket] Projects',
      autogenerate: {
        directory: 'projects'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
      Head: './src/components/Head.astro',
      PageTitle: './src/components/PageTitle.astro'
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});