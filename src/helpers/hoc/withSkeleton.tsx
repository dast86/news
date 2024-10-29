import Skeleton from "../../components/Skeleton/Skeleton"

interface WithSkeletonProps {
    loding: boolean;
}

function withSkeleton<P extends object> (Component:React.ComponentType<P>, type:string, count:number) {

    return function WithSkeleton (props:WithSkeletonProps & P) {
        const {loding, ...restProps}  = props;
        if (loding) {
            return <Skeleton type={type} count={count}/>
        }

        return <Component {...(restProps as P)}/>
    }
}


export default withSkeleton

