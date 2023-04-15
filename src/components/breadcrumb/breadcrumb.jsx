import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from './breadcrumb.module.scss';

export default function Breadcrumb({isDynamicPage = false}) {
    const router = useRouter();
    const [breadcrumbList, setBreadcrumbList] = useState([]);

    useEffect(()=>{
        const linkPath = router.asPath.split('/');
        const pathArray = linkPath.map((path, i) => ({ breadcrumb: path, href: linkPath.slice(0, i + 1).join('/') }));
        pathArray[0] = {breadcrumb: 'home', href: '/'};
        pathArray.pop();
        if(isDynamicPage) {
            pathArray.pop();
        }
        if(breadcrumbList.length < 1) {
            setBreadcrumbList(pathArray)
        }
    },[router, isDynamicPage, breadcrumbList])
    return (
        <ul className={styles.breadcrumb}>
            {breadcrumbList.map(({breadcrumb, href}, index) => (
                <li key={`breadcrumb-${breadcrumb}-${index}`}>
                    <Link href={href}>{breadcrumb}</Link>
                    {(index < breadcrumbList.length - 1) ? <span>&gt;</span> : null}
                </li>
            ))}
        </ul>
    )
}