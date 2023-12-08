import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { Teams, Team } from './mocks/Team.mock';
import TeamModel from '../database/models/Team.model';

describe('Teams Test', function() {

  it('should return all Teams', async function() {

    sinon.stub(TeamModel, 'findAll').resolves(Teams as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);

    expect(body).to.deep.equal(Teams);

  });

  it('should return a Team by id', async function() {

    const id = 1;

    sinon.stub(TeamModel, 'findByPk').resolves(Team as any);

    const { status, body } = await chai.request(app).get(`/teams/${id}`);

    expect(status).to.equal(200);

    expect(body).to.deep.equal(Team);

  });

});