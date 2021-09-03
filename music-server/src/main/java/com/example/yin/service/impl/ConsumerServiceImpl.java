package com.example.yin.service.impl;

import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.yin.dao.ConsumerDao;
import com.example.yin.entity.Consumer;
import com.example.yin.service.ConsumerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsumerServiceImpl extends ServiceImpl<ConsumerDao, Consumer> implements ConsumerService {

//    @Autowired
//    private ConsumerDao consumerMapper;
//
//    @Override
//    public boolean addUser(Consumer consumer) {
//        return consumerMapper.insertSelective(consumer) >0 ?true:false;
//    }
//
//    @Override
//    public boolean updateUserMsg(Consumer consumer) {
//        return consumerMapper.updateUserMsg(consumer) >0 ?true:false;
//    }
//
//    @Override
//    public boolean updateUserAvator(Consumer consumer) {
//
//        return consumerMapper.updateUserAvator(consumer) >0 ?true:false;
//    }

//    @Override
//    public boolean existUser(String username) {
//        return consumerMapper.existUsername(username)>0 ? true:false;
//    }
//
//    @Override
//    public boolean veritypasswd(String username, String password) {
//
//        return consumerMapper.verifyPassword(username, password)>0?true:false;
//    }

////    删除用户
//    @Override
//    public boolean deleteUser(Integer id) {
//        return consumerMapper.deleteUser(id) >0 ?true:false;
//    }
//
//    @Override
//    public List<Consumer> allUser() {
//        return consumerMapper.allUser();
//    }
//
//    @Override
//    public List<Consumer> userOfId(Integer id) {
//
//        return consumerMapper.userOfId(id);
//    }
//
//    @Override
//    public List<Consumer> loginStatus(String username) {
//
//        return consumerMapper.loginStatus(username);
//    }


    @Autowired
    private ConsumerDao consumerDao;

    public int insertEntity(Consumer consumer){
       return  consumerDao.insert(consumer);
    }


    public List<Consumer> getAllUsers(){
        return  consumerDao.allUser();
    }


}
