import React, {createContext, useState, useContext} from "react";


interface BaseLayoutProps {
    children?: React.ReactNode;
  }
interface IAuthContext {
logged: boolean;
signIn(login: string, password: string): void;
signOut(): void;

}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<BaseLayoutProps> = ({children}) => {
  
const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@minha-carteira:logged');

return(!!isLogged)

});


const signIn =  (login: string, password: string) => {
    if (login ==='Lucas.Nogueira' && password === '298020' || login ==='TESTE' && password === '123' || login ==='Wellington.Saraiva' && password === '102030' ){
        localStorage.setItem('@minha-carteira:logged', 'true');
        setLogged(true);
      
        
    }else{
        alert('Senha ou usuário inválidos!')
    }
}

const signOut =  () =>{
    localStorage.removeItem('@minha-carteira:logged')
    setLogged(false);
  
}



return(
<AuthContext.Provider value={{logged, signIn, signOut}}>
    {children}
</AuthContext.Provider>

);

} 

function useAuth(): IAuthContext { 
const context = useContext(AuthContext);
return context;
}
export {AuthProvider, useAuth};
