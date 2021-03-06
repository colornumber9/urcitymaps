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
                imageUrl: 'https://freight.cargo.site/t/original/i/41295a4c55b7ba7a1395fc1f78d3b49854ab6434427efdb35315216a7f8644aa/008.jpg',
                id: 1,
                linkUrl: 'usa'
            },
            {
                title: 'asia',
                imageUrl: 'https://webmotriz.com.br/wp-content/new-friends-colony-map-i5.gif',
                id: 2,
                linkUrl: 'asia'   
            },
            {
                title: 'canada',
                imageUrl: 'https://britishcolumbia.com/images/maps/south-vancouver-island.gif',
                id: 3,
                linkUrl: 'canada'    
            },
            {
                title: 'middle east',
                imageUrl: 'https://www.orangesmile.com/common/img_city_maps/baghdad-map-2.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'middle-east'    
            },
            {
                title: 'europe',
                imageUrl: 'https://www.acitymap.com/wp-content/uploads/2015/03/rome-vector-map.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'europe'    
            }]
        }
    }

    render() {
        return(
            <div className="directory-menu">
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
            ))}
            </div>
        )
    }
}

export default Directory;