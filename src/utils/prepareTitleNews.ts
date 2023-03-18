const prepareTitleNews = (value: string) => {

   const compoundTitleBegin = (title: string) => {
      let arrtitle = title.split(' ').slice(0, -1)
      return arrtitle.join(' ')
   }
   const compoundTitleEnd = (title: string) => {
      let arrtitle = title.split(' ')
      return arrtitle[arrtitle.length - 1]
   }

   return {
      titleBegin: compoundTitleBegin(value),
      titleEnd: compoundTitleEnd(value)
   }
}

export default prepareTitleNews