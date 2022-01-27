
const themeState: {[key: string]: object} = {
    casual:{
        logoWord:'#c7202f',
        headerBackground:'#004282',
        headerColor:'#FFF',
        loginButtonBackground:'#c7202f',
        loginButtonColor:'#FFF',
        customerAdvanceButton:'#d32f2f',
        customerAdvanceButtonColor:'#FFF',
        customerConfirmButton:'#0277bd',
        customerConfirmButtonColor:'#FFF',
        icon:'#e57373',
        tableHeader:'#bb152f',
        tableHeaderWord:'#FFF',
        detailsBanner:'#d32f2f',
        advanceButton:'#d32f2f'
    },
    style2:{
        logoWord:'#C17767',
        headerBackground:'#689689',
        headerColor:'#FFF',
        loginButtonBackground:'#689689',
        loginButtonColor:'#FFF',
        customerAdvanceButton:'#504136',
        customerAdvanceButtonColor:'#FFF',
        customerConfirmButton:'#A49E8D',
        customerConfirmButtonColor:'#FFF',
        icon:'#B2E6D4',
        tableHeader:'#A49E8D',
        tableHeaderWord:'#FFF',
        detailsBanner:'#A49E8D',
        advanceButton:'#689689'
    },
    style3:{
        logoWord:'#C17767',
        headerBackground:'#424B54',
        headerColor:'#FFF',
        loginButtonBackground:'#424B54',
        loginButtonColor:'#FFF',
        customerAdvanceButton:'#424B54',
        customerAdvanceButtonColor:'#FFF',
        customerConfirmButton:'#C5BAAF',
        customerConfirmButtonColor:'#FFF',
        icon:'#EBCFB2',
        tableHeader:'#424B54',
        tableHeaderWord:'#FFF',
        detailsBanner:'#424B54',
        advanceButton:'#424B54'
    }
}

export const themeReducer = (state = themeState, action: any) => {
    switch(action.type){
        case 'NONE':
            return action.payload.data
        default:
            return state
    }
}

export const themeSelectedReducer = (state = 'casual', action: any) => {
    switch(action.type){
        case 'HANDLE_THEME':
            return action.payload
        default:
            return state
    }
}