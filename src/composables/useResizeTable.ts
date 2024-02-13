import { onMounted } from 'vue'

export function useResizeTable(): void {
  onMounted(() => {
    // resize table
    const resizeArea = document.querySelector('.main__resize-area') as HTMLElement
    const mainForm = document.querySelector('.main__form') as HTMLElement
    const mainDiagram = document.querySelector('.main__diagram') as HTMLElement

    resizeArea.addEventListener('mousedown', function (e: MouseEvent): void {
      e.preventDefault()
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })

    function resize(e: MouseEvent): void {
      const body = document.querySelector('body') as HTMLElement
      document.body.style.cursor = 'col-resize'
      mainForm.style.pointerEvents = 'none'

      let widthPercentage = (e.pageX / body.scrollWidth) * 100
      if (widthPercentage <= 15) {
        widthPercentage = 15
      } else if (widthPercentage >= 85) {
        widthPercentage = 85
      }

      mainForm.style.width = widthPercentage + '%'
      mainDiagram.style.width = 100 - widthPercentage + '%'
    }

    function stopResize(): void {
      document.body.style.cursor = ''

      window.removeEventListener('mousemove', resize)
    }
  })
}
