"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[961],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:9},l="Super Blocks",p={unversionedId:"super-blocks",id:"version-1.10/super-blocks",title:"Super Blocks",description:"Super blocks are the main units of allocation used within the SEF API. Like super pages, super",source:"@site/versioned_docs/version-1.10/super-blocks.md",sourceDirName:".",slug:"/super-blocks",permalink:"/SEF-API/1.10/super-blocks",tags:[],version:"1.10",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Super Pages",permalink:"/SEF-API/1.10/super-pages"},next:{title:"Addressing",permalink:"/SEF-API/1.10/addressing"}},c={},u=[{value:"Super Block Management Commands",id:"super-block-management-commands",level:2},{value:"Figure 10.1: Super Block State Transitions",id:"figure-101-super-block-state-transitions",level:4}],m={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"super-blocks"},"Super Blocks"),(0,o.kt)("p",null,"Super blocks are the main units of allocation used within the SEF API. Like super pages, super\nblocks span all the dies within a single virtual device. The number of super pages in a super block is\nfixed and is the same as the number of pages in a die. The size of a super block in ADUs, however,\nis dependent on the configuration of the virtual device that it resides in. A super block is only a\nmember of a single QoS domain at any point in time. A super block can only be assigned to a\ndifferent QoS domain after it has been released."),(0,o.kt)("p",null,"When an erase or allocation occurs within a QoS domain, it is performed in units of super\nblocks."),(0,o.kt)("h2",{id:"super-block-management-commands"},"Super Block Management Commands"),(0,o.kt)("p",null,"Super block management commands consist of three functions: ",(0,o.kt)("inlineCode",{parentName:"p"},"Allocate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Close")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Release"),".\nSuper block data commands consist of the commands ",(0,o.kt)("inlineCode",{parentName:"p"},"Write")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy"),". Each command\naffects state conditions of the super block. Figure 10.1 shows the state transitions regarding super\nblocks."),(0,o.kt)("p",null,"Super blocks are allocated either explicitly by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Allocate")," command, or implicitly by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Write"),"\ncommand. When a reserved flash memory address (0xFFFFFFFFFFFFFFFF) is specified in\na ",(0,o.kt)("inlineCode",{parentName:"p"},"Write")," command, SEF will check if a super block has been allocated for the corresponding\nplacement ID; if not and the QoS domain has not exceeded its capacity limit, a new super block\nwill automatically be allocated and assigned to the placement ID. When a ",(0,o.kt)("inlineCode",{parentName:"p"},"Write")," command with\nthe reserved flash memory address extends past the end of the current automatically opened super\nblock, a new super block is allocated (assuming the capacity limit is not exceeded) once the current\nsuper block is filled."),(0,o.kt)("p",null,"Host does not need to erase super block. When the defect strategy is packed or fragmented, the\napparent size of the super block may shrink after it is erased. This affects SEFWriteWithoutPhysi\x02calAddress1(),\nSEFGetSuperBlockInfo() and SEFAllocateSuperBlock(). The number of available ADUs may also shrink as the super block is programmed."),(0,o.kt)("h4",{id:"figure-101-super-block-state-transitions"},"Figure 10.1: Super Block State Transitions"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Super Block State Transitions",src:n(3823).Z,width:"1258",height:"543"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Free State")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Free")," is the initial state for super blocks. ",(0,o.kt)("inlineCode",{parentName:"p"},"Free")," super blocks belong to the free pool owned by a\nVirtual Device.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Closed")," super block transits to ",(0,o.kt)("inlineCode",{parentName:"p"},"Free")," upon the Release command."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Open State")),(0,o.kt)("p",null,"This is the state of super blocks in the middle of being programmed. ",(0,o.kt)("inlineCode",{parentName:"p"},"Free")," super block transits to\n",(0,o.kt)("inlineCode",{parentName:"p"},"Open")," by Allocate command and Write Without Physical Address command.\nInternally, there are three ",(0,o.kt)("inlineCode",{parentName:"p"},"Open")," states:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Open for Write Without Physical Address"),": A super block dedicated to Write Without Physical Address. The super block transits to this state by a Nameless Write command without explicit super block ID. The number of super blocks that can exist in this state is determined by the placementID parameter at the time of creation for a QoS domain.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Open for Nameless Copy"),": A super block dedicated to Nameless Copy. The super block transits to this state by a Nameless Copy command without explicit super block ID. Only one super block can be open for nameless copy at a time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Open by Erase"),": A super block opened by the super block management command ",(0,o.kt)("inlineCode",{parentName:"p"},"Allocate"),". This super block can be used for Nameless Write by specifying explicit super block ID. For special case only."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Closed")),(0,o.kt)("p",null,"This is the state of super blocks which retain effective data after all Super Pages have been\nprogrammed. ",(0,o.kt)("inlineCode",{parentName:"p"},"Open")," super block transits to ",(0,o.kt)("inlineCode",{parentName:"p"},"Closed")," by either a Nameless Write command, a\nNameless Copy command, an explicit Close command or a device-initiated automatic close"))}d.isMDXComponent=!0},3823:function(e,t,n){t.Z=n.p+"assets/images/superblock-state-transitions-4207996b5876634462e17be244b972c3.png"}}]);