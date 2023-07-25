"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('posts', [
            {
                project_image: 'https://media.discordapp.net/attachments/948506310448660530/1127780711018008657/1688954265102.jpg?width=456&height=608',
                project_description: 'projeto baseado em baseado',
                repository_link: 'string',
                user_id: 1,
                is_favorite: true,
            },
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('posts', {});
    }
};
//# sourceMappingURL=2-posts.js.map