import React from 'react';
import { Stack } from 'rsuite';

const Copyright = () => {
  return (
    <Stack className="copyright" justifyContent="center" style={{ height: 40, marginTop: 20 }}>
      <div className="container">
        <p>
          © 2023, Made with ❤️ by{' '}
          <a href="https://ponpon.ovh" target="_blank" rel="noreferrer">
            Ponpon
          </a>
        </p>
      </div>
    </Stack>
  );
};

export default Copyright;
