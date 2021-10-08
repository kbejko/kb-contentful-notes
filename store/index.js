// import { $contentfulFetch } from '~/plugins/contentful'
import client from '~/plugins/contentful';

export const state = () => ({
	notes: null
});

export const mutations = {
	updateNotes: (state, notes) => {
		state.notes = notes;
	}
};

export const actions = {
	async getNotes({ commit }) {
		try {
			if (!client) return;
			const response = await client.getEntries({
				content_type: 'notes'
			});
			if (response.items.length > 0) commit('updateNotes', response.items);
		} catch (err) {
			console.error(err);
		}
	}
};