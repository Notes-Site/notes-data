let timelineData = [
    {
        text: 'Religious Reformers',
        year: '1703-1840',
        category: {
            tag: 'Pre-Partition Era',
            color: '#ff5050'
        },
        link: {
            url:
                '../.././college',
            text: 'Read more'
        }
    },

    {
        text: 'Mughal Empire',
        year: '1658',
        category: {
            tag: 'Pre-Partition Era',
            color: '#ff5050'
        },
        link: {
            url:
                '../.././college',
            text: 'Read more'
        }
    },
    
    {
        text: 'East India Company: Reasons of entering the subcontinent',
        year: '1608',
        date: 'August 24',
        category: {
            tag: 'Pre-Partition Era',
            color: '#ff5050'
        },
        link: {
            url:
                '../.././college',
            text: 'Read more'
        }
    },
    {
        text: 'British expansion and Indian resistance',
        year: '1750-1850',
        category: {
            tag: 'Pre-Partition Era',
            color: '#ff5050'
        },
        link: {
            url:
                '../.././college',
            text: 'Read more'
        }
    },
    {
        text: 'The War of Independence',
        year: '1857',
        date: 'May 10',
        category: {
            tag: 'Pre-Partition Era',
            color: '#ff5050'
        },
        link: {
            url:
                '../.././college',
            text: 'Read more'
        }
    },
    {
        text: '3rd June Plan: Indepedence Act',
        year: '1947',
        date: 'June 03',
        category: {
            tag: 'Partition and Independence',
            color: '#33ccff'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },

    
    {
        text: 'Sir Syed Ahmed Khan',
        year: '1817',
        date: 'October 17',
        category: {
            tag: 'Pre-Partition Era',
            color: '#ff5050'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },
    {
        text: 'Simla Agreement',
        year: '1972',
        date: 'July 2',
        category: {
            tag: 'Post-Independence Era ',
            color: '#33cc33'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    }
]

timelineData = timelineData.sort((a, b) => {
    if (a.year < b.year) {
        return -1;
    }
    if (new Date(a.year + a.date) < new Date(b.year + b.date)) {
        return -1;
    }
    });

export default timelineData
