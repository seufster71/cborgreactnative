/*
* Author Edward Seufert
*/
'use-strict';
import React from 'react';
import fuLogger from '../core/common/fu-logger';
import PublicView from './public-view';


function PublicContainer() {
	
	fuLogger.log({level:'TRACE',loc:'PublicContainer::render',msg:"Hi in public"});
    return (
		<PublicView/>
	);
}


export default PublicContainer;
