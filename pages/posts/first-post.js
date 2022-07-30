import Head from 'next/head'
import Link from 'next/link'
import App from '../_app'

export default function FirstPost(){
    return (
	<div>
            <Head>
                <title>Article</title>
	    </Head>

	    <h3>First Post</h3>
	    <Link href="/">
	        <h3><a>Return back to home</a></h3>
	    </Link>
	</div>
    );
}
