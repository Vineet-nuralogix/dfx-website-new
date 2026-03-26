//

 /**
   This function handle requests from native code.
  * It will dispatch the request to the appropriate handler based on the request type.
  * @param {string} requestJson - The JSON string from native code, which is a NativeRequest object.
 */
function onNativeRequest(requestJson) {
    try {
        const request = JSON.parse(requestJson);
        const type = request.type;
        const data = request.data;

        console.log('onNativeRequest received:', type, data);
        
        if (type === 'navigate') {
            // Parse the navigation data
            const navData = JSON.parse(data);
            const destination = navData.destination;
            const paramsJson = navData.paramsJson;
            
            let targetUrl;
            if (destination === 'index') {
                targetUrl = 'index.html';
            } 
            else if (destination === 'profile') {
                targetUrl = 'profile.html';
            }
            else if (destination === 'results') {
                targetUrl = 'result.html';
            }
            
            if (targetUrl) {
                console.log('Navigating to:', targetUrl);
                if (paramsJson) {
                    // Store paramsJson in sessionStorage to pass to the next page
                    sessionStorage.setItem('measurementData', paramsJson);
                }
                window.location.href = targetUrl;
            }
        }
        // More request types can be handled here
    } catch (error) {
        console.error('Error in onNativeRequest:', error);
    }
}
