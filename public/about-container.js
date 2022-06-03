/*
* Author Edward Seufert
*/
'use-strict';
import React from 'react';
import fuLogger from '../core/common/fu-logger';
import AboutView from './about-view';


function AboutContainer() {

	fuLogger.log({level:'TRACE',loc:'AboutContainer::render',msg:"Hi in service"});
    return (
		<AboutView/>
	);
}

export default AboutContainer;
