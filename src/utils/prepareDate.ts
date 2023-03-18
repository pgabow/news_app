const prepareDate = (value: string) => {
	
   const newDate = new Date(value)

   const correct = (i: number) => {
      return i <= 9 ? '0' + i : i;
   }

   return {
      day: correct(newDate.getDay()),
      month: correct(newDate.getMonth() + 1),
   }
}

export default prepareDate