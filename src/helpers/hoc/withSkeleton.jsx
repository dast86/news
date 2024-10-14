import Skeleton from "../../components/Skeleton/Skeleton"


function withSkeleton (Component, type, count) {

    return function WithSkeleton (props) {
        const {loding, ...restProps}  = props;
        if (loding) {
            return <Skeleton type={type} count={count}/>
        }

        return <Component {...restProps}/>
    }
}


export default withSkeleton