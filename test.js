/*	
		============================================================================
 		*
		*	StardustJS - Test
 		*
 		*===========================================================================
		*---------------------------------------------------------------------------
 		*
 		*	https://github.com/creatologist/stardust-js
 		*
 		============================================================================
		*
		*   author          >>  Christopher Miles
		*   site            >>  www.ChristopherMil.es
		*
		============================================================================
*/



var Test = Test ? Test : (function() {

	// ---------------------------------------------------------------------------------------------------------------------------
	
	var init = function() {

		// namespacing works !! :)
		console.log( random.flipCoin() );
		console.log( browserInfo );
		console.log( getPath( TRIANGLE, 100 ) );

	};


	// ---------------------------------------------------------------------------------------------------------------------------

	


	// ===========================================================================================================================
	// ===========================================================================================================================

	var o = {};

	// use namespace
	Utils.namespace( Utils, o );
	Utils.namespace( Shapes, o );

	o.init = init;

	return o;

})();