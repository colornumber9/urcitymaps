import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

    this.state = {
        sections: [
            {
                title: 'usa',
                imageUrl: 'https://lh3.googleusercontent.com/proxy/Os-94hWKsUYOomGlgnXH_b-e5u_XdbfOIdrJQJJr5bMEdyAYfDSIHmlSYXw9-Qpm66pral8DsLNxV3CFeE4YOicRvnzcYgtrBgBKQwua8TLmevfh4wjm1P6-OYg8RZsBnh9OXQcTiv9nW1XbS2AASxFEYw',
                id: 1
            },
            {
                title: 'canada',
                imageUrl: 'https://britishcolumbia.com/images/maps/south-vancouver-island.gif',
                id: 2   
            },
            {
                title: 'asia',
                imageUrl: 'https://webmotriz.com.br/wp-content/new-friends-colony-map-i5.gif',
                id: 3    
            },
            {
                title: 'middle east',
                imageUrl: 'https://www.orangesmile.com/common/img_city_maps/baghdad-map-2.jpg',
                size: 'large',
                id: 4    
            },
            {
                title: 'europe',
                imageUrl: 'https://www.acitymap.com/wp-content/uploads/2015/03/rome-vector-map.jpg',
                size: 'large',
                id: 5    
            }]
        }
    }

    render() {
        return(
            <div className="directory-menu">
            {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
            </div>
        )
    }
}

export default Directory;