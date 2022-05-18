/*
* Author Edward Seufert
*/
'use-strict';
import React from 'react';
import fuLogger from '../core/common/fu-logger';
import ServiceView from './service-view';


function ServiceContainer() {

	fuLogger.log({level:'TRACE',loc:'ServiceContainer::render',msg:"Hi in service"});
    return (
		<ServiceView/>
	);
}

export default ServiceContainer;
