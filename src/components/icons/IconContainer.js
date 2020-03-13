import React from 'react';

export default({size=24, children})=><div style={{display:'inline-block', minWidth:size, minHeight:size, maxWidth:size, maxHeight:size}}>
	{children}
</div>
