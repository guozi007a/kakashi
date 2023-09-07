/** 动态引入font.css文件，因为发到github pages上，根目录会不同 */

export const dynamicImportFont = (mode: string) => {
    const head = document.head
    const linkContainer = document.createElement('link')
    linkContainer.setAttribute('rel', 'stylesheet')
    linkContainer.setAttribute('href', `${mode}fontface.css`)
    head.appendChild(linkContainer)
}