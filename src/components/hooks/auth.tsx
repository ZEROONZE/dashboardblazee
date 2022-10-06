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
    if (login ==='LUCAS.NOGUEIRA' && password === '123' || login ==='CRISLANE.KEVIA' && password === '123456' || login ==='ACESSO.GRATIS' && password === '123' || login ==='Wellington.Saraiva' && password === '102030' || login ==='RAFAEL.OLIVEIRA' && password === '1234'){
        localStorage.setItem('@minha-carteira:logged', 'true');
        setLogged(true);
      
        
    }else{
        alert('Senha ou usuário inválidos ou você ainda não é assinante!')
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
