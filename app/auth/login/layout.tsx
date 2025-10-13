
    const authLayout = ({children}:{
        children:React.ReactNode
    }) =>{

        return(
            <div className="h-full flex items-center justify-center bg-radial from-green-500 to-green-900">
                {children}
            </div>
        )

    }

    export default authLayout;