export default {
  search: (
    isActive: boolean = false,
  ) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m19 19-4.35-4.35M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0" stroke="#1A1A1A" stroke-width="${
    isActive ? 2 : 1.5
  }" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  calender: (
    isActive: boolean = false,
  ) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.834 3.334H4.166a.833.833 0 0 0-.833.833v11.667c0 .46.373.833.833.833h11.667c.46 0 .833-.373.833-.833V4.166a.833.833 0 0 0-.833-.833" stroke="#000" stroke-width=${
    isActive ? 2 : 1.5
  }" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.666 13.334h.002v.001zm0-3.334h.002v.001zM3.334 6.666h13.333m-3.333-5v1.667M6.666 1.666v1.667" stroke="#000" stroke-width=${
    isActive ? 2 : 1.5
  }" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
  favorite: (
    isActive: boolean = false,
  ) => `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.458 2.591a5.3 5.3 0 0 0-1.708-1.177 5.12 5.12 0 0 0-4.028 0 5.3 5.3 0 0 0-1.708 1.177L11 3.638 9.986 2.59A5.18 5.18 0 0 0 6.264 1a5.18 5.18 0 0 0-3.722 1.59A5.52 5.52 0 0 0 1 6.431a5.52 5.52 0 0 0 1.542 3.841L11 19l8.458-8.728a5.5 5.5 0 0 0 1.141-1.762 5.58 5.58 0 0 0 0-4.157 5.5 5.5 0 0 0-1.141-1.762" stroke="#1A1A1A" stroke-width="${
    isActive ? 2 : 1.5
  }" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  profile: (
    isActive: boolean = false,
  ) => `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 19v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M13 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0" stroke="#1A1A1A" stroke-width="${
    isActive ? 2 : 1.5
  }" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  logo: '<svg width="117" height="58" viewBox="0 0 117 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.905 57q-1.224 0-2.016-.792t-.792-2.016V3.576q0-1.224.792-2.016T2.905.768h14.4q5.328 0 9.432 2.376a16.45 16.45 0 0 1 6.408 6.408q2.304 4.104 2.304 9.504 0 5.256-2.304 9.36-2.304 4.032-6.408 6.408-4.104 2.304-9.432 2.304H5.713v17.064q0 1.224-.792 2.016T2.905 57m2.808-25.272h11.592q3.672 0 6.552-1.584 2.88-1.656 4.464-4.536 1.656-2.88 1.656-6.552 0-3.816-1.656-6.696-1.584-2.88-4.464-4.536t-6.552-1.656H5.713zM50.88 57q-2.88 0-5.184-1.584-2.232-1.584-3.528-4.392-1.224-2.808-1.224-6.48V3.504q0-1.224.72-1.944.792-.792 2.016-.792t1.944.792q.792.72.792 1.944v41.04q0 3.096 1.224 5.04 1.296 1.944 3.24 1.944h1.8q1.08 0 1.728.792.648.72.648 1.944t-.936 2.016q-.864.72-2.304.72zm14.705 0q-1.296 0-2.088-.72-.72-.792-.72-2.088V20.424q0-1.296.72-2.016.792-.792 2.088-.792 1.224 0 1.944.792.792.72.792 2.016v33.768q0 1.296-.792 2.088-.72.72-1.944.72m-.072-46.872q-1.584 0-2.736-1.152t-1.152-2.808q0-1.8 1.152-2.808Q64 2.28 65.584 2.28q1.512 0 2.664 1.08 1.224 1.008 1.224 2.808 0 1.656-1.152 2.808t-2.808 1.152m33.7 47.232q-5.832 0-10.368-2.52-4.464-2.592-7.056-7.128-2.52-4.536-2.52-10.368 0-5.904 2.376-10.368 2.448-4.536 6.696-7.128t9.792-2.592q5.472 0 9.504 2.52 4.104 2.448 6.336 6.84t2.232 10.008q0 1.152-.72 1.872-.72.648-1.872.648h-30.6v-4.608h31.176l-3.096 2.232q.072-4.176-1.512-7.488t-4.536-5.184q-2.88-1.872-6.912-1.872-4.104 0-7.2 1.944t-4.824 5.4q-1.656 3.384-1.656 7.776t1.872 7.776q1.944 3.384 5.256 5.328t7.632 1.944q2.592 0 5.184-.864 2.664-.936 4.248-2.304a2.77 2.77 0 0 1 1.8-.648q1.008-.072 1.728.504.936.864.936 1.872.072 1.008-.792 1.728-2.376 2.016-6.048 3.384-3.672 1.296-7.056 1.296m-10.8-47.592q-1.152 0-2.016-.648-.792-.72-.792-1.944 0-1.152.792-1.872a3.05 3.05 0 0 1 2.016-.72h18.648q1.152 0 1.944.72.864.72.864 1.872 0 1.224-.864 1.944-.792.648-1.944.648z" fill="#000"/></svg>',
  eye: `<svg width="20" height="20" viewBox="0 0 0.6 0.6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.375.3a.075.075 0 1 1-.15 0 .075.075 0 0 1 .15 0" stroke="#000" stroke-width=".05" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M.3.125A.25.25 0 0 0 .061.3a.251.251 0 0 0 .478 0A.25.25 0 0 0 .3.125" stroke="#000" stroke-width=".05" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  eye_off: `<svg width="20" height="20" viewBox="0 0 0.6 0.6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m.075.075.45.45M.246.248a.075.075 0 0 0 .107.105M.163.166A.25.25 0 0 0 .061.3a.25.25 0 0 0 .374.135M.275.126.3.125C.412.125.507.199.539.3a.3.3 0 0 1-.03.063" stroke="#000" stroke-width=".05" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  share:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6-4-4m0 0L8 6m4-4v13" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  heart: (
    isActive: boolean = false,
  ) => `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.458 2.591a5.3 5.3 0 0 0-1.708-1.177 5.12 5.12 0 0 0-4.028 0 5.3 5.3 0 0 0-1.708 1.177L11 3.638 9.986 2.59A5.18 5.18 0 0 0 6.264 1a5.18 5.18 0 0 0-3.722 1.59A5.52 5.52 0 0 0 1 6.431a5.52 5.52 0 0 0 1.542 3.841L11 19l8.458-8.728a5.5 5.5 0 0 0 1.141-1.762 5.58 5.58 0 0 0 0-4.157 5.5 5.5 0 0 0-1.141-1.762" fill="${
    isActive ? '#21D393' : '#ffffff'
  }" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  leftArrow: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 8h14m0 0L8 1m7 7-7 7" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
};
