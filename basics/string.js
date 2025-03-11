name = 'tirth'
age = 19
console.log(`Hello my name is ${name} and my age is ${age}`)

const newname = new String("Tirth")
console.log(newname.toUpperCase())
console.log(newname.charAt(2))
console.log(newname.indexOf('t'))

const aurname = newname.substring(0,2)
console.log(aurname)
const ekaurname = newname.slice(-4,4)
console.log(ekaurname)

const n = '     tirth      '
console.log(n )
console.log(n.trim())

const url = "https://tirthpanchori/tirth%20panch"
console.log(url.replace('%20', "$"))
console.log(url.includes('tirth'))

const st = 'tirth-panchori-19'
console.log(st.split('-'))