import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-text-content'>
                <h2 className='sec-title'>What is gift ideas?</h2>
                <p>Gift ideas is a website created for those families or groups of friends who aren't sure what to get someone else.</p>
                {/* Maybe add some css styling to indicate a different section */}
                <h2 className='sec-title'>Ever Have Gift Questions?</h2>
                <p>If you have ever been lost when Christmas or a Birthday rolls around as to what someone would enjoy, then you are in the right spot.</p>
                {/* Maybe add some css styling to indicate a different section */}
                <h2 className='sec-title'>What We Do</h2>
                <p>Creating a free account allows users to create groups for any occasion! Invite your friends or family to these groups and add things you want to your own list, without ever being able to directly see what anyone else is getting you from your list to ensure the "suprise" factor, and anonymity (if desired), remains!</p>
            </div>
        </div>
    );
}

export default Home;
