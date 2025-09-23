import React from 'react';
import $ from 'jquery';
import { Link } from '../../sofbox';

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
};
const ChildMenu = (props) => {
    const navItem = props.child;
    const listItems = navItem.map((item, index) => {
        const hasHref = typeof item.href === 'string' && item.href.startsWith('/');
        const content = (<a>{ item.title }</a>);
        return (
            <li key={index} className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-506"}>
                {hasHref ? (
                    <Link activeClassName='active' href={item.href}>
                        {content}
                    </Link>
                ) : content}
            </li>
        );
    });

    return (
        <ul className={"sub-menu"} style={{ display: 'none' }}>{ listItems }</ul>
    );
};

const Navigation = (props) => {
    const navItems = props.navItemList;
    const listItems = navItems.map((option, key) => {
        const hasHref = typeof option.href === 'string' && option.href.startsWith('/');
        const anchorProps = {
            key,
            className: option._is_active !== undefined && option._is_active ? 'active nav-link ' : ' nav-link ',
            href: hasHref ? option.href : '#',
            onClick: hasHref ? () => { jumpTo(option.href) } : (e) => e.preventDefault()
        };
        return (
            <li className="nav-item menu-item" key={key}>
                <a {...anchorProps}>
                    { option.title }
                    { option.children && (<i className="fa fa-angle-down toggledrop" aria-hidden="true" />) }
                </a>

                { option.children && ( <ChildMenu child={option.child} /> ) }
            </li>
        );
    });
    return (
        <ul className="navbar-nav ml-auto justify-content-end header-style2 menu">{listItems}</ul>
    );
};

const HeaderStyle2 = (props) => {
    const {children} = props;

    //const topbar = children.find(child => child.type === Topbar) && false;
    return (
        <>
            <header id="main-header" className={props.className}>
                { props.children }
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="#">
                                    <img className="img-fluid" id={ props.styledLogo !== undefined && props.styledLogo ? 'logo_img' : 'new_image' } src={ props.logoImg } alt="#" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="ion-navicon" />
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <Navigation navItemList={props.navItems} />

                                    { props.buttonSection }
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderStyle2;
