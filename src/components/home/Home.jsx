import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-text-content'>
                <h2 className='sec-title'>What is gift ideas?</h2>
                <p>Gift ideas is a website created for those families or groups of friends who aren't sure what to ever get someone. If you have ever been lost when Christmas or a Birthday rolls around as to what someone would enjoy, then you are in the right spot.</p>
                {/* Maybe add some css styling to indicate a different section */}
                <h2 className='sec-title'>Section 2</h2>
                <p>Description for more elaboration.</p>
                {/* Maybe add some css styling to indicate a different section */}
                <h2 className='sec-title'>Section 3</h2>
                <p>Description for more elaboration.</p>
            </div>
        </div>
    );
}

export default Home;
