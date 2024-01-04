const ContainerT = (props: any) => {
    return (<div className="  lg:mx-40 md:mx-8  xl:mx-96  mt-3 mx-auto px-4  " style={{minHeight:"80vh"}} >

        {props.children}
    </div>)
}

export default ContainerT;