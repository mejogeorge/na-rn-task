// import console = require("console");


export const apiFetchRequest = (callBack,url) => {
    console.warn('callback clled')
    fetch(input = url)
      .then((Response) => Response.json())
      .then((responseJson) => callBack(responseJson.results)

        // this.setState(
        //   {
        //     isloading: false,
        //     nextUrl: responseJson.next === null ? nextUrl:responseJson.next,
        //     dataSource: [...this.state.dataSource, ...responseJson.results],
        //   }, () => {
        //     console.warn('results 3', responseJson.next)
        //   })
      )
}