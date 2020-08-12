import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fetch from 'node-fetch';

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main';

chai.use(dirtyChai);
chai.use(sinonChai);

global.fetch = fetch;

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist();
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist();
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist();
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist();
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist();
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce();
    });
  });
});
