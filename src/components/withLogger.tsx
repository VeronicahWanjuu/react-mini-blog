import React, { useEffect } from 'react';

function withLogger<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  componentName: string
) {
  const WithLogger: React.FC<T> = (props) => {
    useEffect(() => {
      console.log(`[withLogger] ${componentName} mounted`);
      return () => {
        console.log(`[withLogger] ${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithLogger;
}

export default withLogger;
