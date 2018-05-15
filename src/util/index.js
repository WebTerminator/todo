export const getValue = e => ({ 
    name: e.target.getAttribute('name'),
    value: e.target.value
})

export const isName = (el, name) =>  el == name